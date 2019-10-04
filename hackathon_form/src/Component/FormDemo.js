import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class formDemo extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
         validation: '',
        }}

        //Yup Validation
        validationSchema={Yup.object().shape({
          validation: Yup.string()
            .required('First Name is required'),
        })}

        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n')
        }}
        render={({ errors, touched }) => (
          <Form>
            <div className="mb-12 col-md-12"><h2 className='text-center' >Transaction</h2></div>
            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="VendorName" className="col-sm-2 col-form-label">Vendor Name:</label>
                <Field name="VendorName" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
            
              </div>
            </div>

            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Transcation_Id" className="col-sm-2 col-form-label">Transcation_Id:</label>
                <Field name="Transcation_Id" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
           

                <label htmlFor="Transcation_Amount" className="col-sm-2 col-form-label">Transcation_Amount:</label>
                <Field name="Transcation_Amount" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>

            <div className="form-group">
              <div className="form-inline" >

              <label htmlFor="Payment" className="col-sm-2 col-form-label">Payment:</label>
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label class="form-check-label" for="gridRadios1">
          Debit Card
          </label>
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label class="form-check-label" for="gridRadios1">
          Credit Card
          </label>
         

               
              </div>
            </div>

            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Card_Number" className="col-sm-2 col-form-label">Card_Number:</label>
                <Field name="Card_Number" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>



            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="State" className="col-sm-2 col-form-label">Date:</label>
                <select className="form-control form-control-sm">
                <option>Select</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
<div></div>
                <select class="form-control form-control-sm">
                <option>Select</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>
            </div>


            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Card_Cvv" className="col-sm-2 col-form-label">Card_Cvv:</label>
                <Field name="Card_Cvv" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>
                     
            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Card_Holder_Name" className="col-sm-2 col-form-label">Card_Holder_Name:</label>
                <Field name="Card_Holder_Name" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>
            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Billing_Address" className="col-sm-2 col-form-label">Billing_Address:</label>
                <textarea name="Billing_Address"   type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>

        
            <div className="form-group">
              <div className="form-inline" >
                <label htmlFor="Zip" className="col-sm-2 col-form-label">Zip:</label>
                <Field name="Zip" type="integer" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
                
                <label htmlFor="City" className="col-sm-2 col-form-label">City:</label>
                <Field name="City" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>

           
            <div className="form-group">
              <div className="form-inline" >
              <label htmlFor="State" className="col-sm-2 col-form-label">State:</label>
                <Field name="State" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
                <label htmlFor="Country" className="col-sm-2 col-form-label">Country:</label>
                <Field name="Country" type="text" className={'form-control' + (errors.validation && touched.validation ? ' is-invalid' : '')} />
               
              </div>
            </div>
              
           


              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Pay</button>
                <button type="reset" className="btn btn-secondary">Cancel</button>
              </div>
          </Form>
            )}
          />
        )
      }
    }
    
export default formDemo;