import * as Yup from 'yup'
export const SchemaForSearch = Yup.object().shape({
    search: Yup.string()
        .required("Пожжалуйста, введите ключевое слово"),
});