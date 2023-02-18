import './searchform.css';
import { Formik, Field, Form } from "formik";
import { SchemaForSearch } from '../../validations/validationsSearch';
import { useLocation } from 'react-router-dom';
function Searchform({ isOpen }) {
    const locations = useLocation();
    const searchMap = locations.pathname === "/map" ? 'searchform__input_map' : 'searchform__input'
    const buttomMap = locations.pathname === "/map" ? 'searchform__button_map' : 'searchform__button'
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
                        <Field className={searchMap} type="text" name='filmName' placeholder="Введите запрос" />
                        <button className={buttomMap} type="submit"></button>
                    </section >

                </Form>)}
        </ Formik>
    )
}

export default Searchform;