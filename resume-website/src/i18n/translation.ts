import i18n from "@/i18n"

const Tr = {
    isLocaleSupported(locale: any) {
        return Tr.supportedLocales.includes(locale)
    },
    getPersistedLocale() {
        const persistedLocale = localStorage.getItem("user-locale")
        if (Tr.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            return null
        }
    },
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },
    set currentLocale(newLocale: string) {
        i18n.global.locale.value = newLocale
    },
    async switchLanguage(newLocale: string) {
        Tr.currentLocale = newLocale
        // document.querySelector("html").setAttribute("lang", newLocale)
    },
    async routeMiddleware(to: any, _from: any, next: any) {
        const paramLocale = to.params.locale
        if (!Tr.isLocaleSupported(paramLocale)) {
            return next(Tr.guessDefaultLocale())
        }
        await Tr.switchLanguage(paramLocale)
        return next()
    },
    guessDefaultLocale() {
        const userPersistedLocale = Tr.getPersistedLocale()
        if (userPersistedLocale) {
            return userPersistedLocale
        }
    },
    i18nRoute(to: any) {
        console.log("i18nRoute")
        console.log({
            ...to,
            params: {
                locale: Tr.currentLocale,
                ...to.params
            }
        })
        return {
            ...to,
            params: {
                locale: Tr.currentLocale,
                ...to.params
            }
        }
    }
}

export default Tr