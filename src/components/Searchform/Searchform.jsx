import './searchform.css';
import { Formik, Field, Form } from "formik";
import { SchemaForSearch } from '../../validations/validationsSearch';

function Searchform({ isOpen }) {
    console.log(isOpen)
    return (
        <Formik
            initialValues={{
                search: '',
            }}
            validationSchema={SchemaForSearch}
        >
            {({ errors, touched }) => (
                <Form className="searchform" >
                    <section className={`searchform__container ${isOpen}`}>
                        <div className="SearchForm__error" >
                            {errors.search &&
                                touched.search && <div className="SearchForm__error">{errors.search}</div>}
                        </div>
                        <Field className='searchform__input' type="text" name='filmName' placeholder="Введите запрос" />
                        <button className='searchform__button' type="submit"></button>
                    </section >

                </Form>)}
        </ Formik>
    )
}

export default Searchform;