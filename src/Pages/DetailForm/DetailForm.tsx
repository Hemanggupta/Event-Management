import { DevTool } from '@hookform/devtools';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { FloatLabel } from 'primereact/floatlabel';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import './DetailForm.css';

function DetailForm() {
  const genders = useMemo(
    () => [
      {
        id: 1,
        label: 'Male'
      },
      {
        id: 2,
        label: 'Female'
      },
      {
        id: 3,
        label: 'Other'
      }
    ],
    []
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const form = useForm();
  const { register, control, handleSubmit } = form;
  return (
    <>
      <Card className="glass-card detail-form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="d-flex gap-4 pt-3 flex-column">
            <FloatLabel>
              <InputText
                className="w-100"
                id="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required'
                  }
                })}
              />
              <label htmlFor="name">Full Name</label>
            </FloatLabel>
            <FloatLabel>
              <InputTextarea
                className="w-100"
                autoResize
                id="address"
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is required'
                  }
                })}
                rows={5}
                cols={30}
              />
              <label htmlFor="address">Address</label>
            </FloatLabel>
            <FloatLabel>
              <InputNumber
                id="phoneNumber"
                {...register('phoneNumber', {
                  required: {
                    value: true,
                    message: 'Phone number is required'
                  }
                })}
                onChange={e => {
                  form.setValue('phoneNumber', e?.value ?? 0 * 2);
                }}
                className="w-100"
                useGrouping={false}
                maxLength={10}
                min={0}
                max={9999999999} // Change the 'max' property value to a number
              />
              <label htmlFor="phoneNumber">Number</label>
            </FloatLabel>
            <FloatLabel>
              <Dropdown
                inputId="gender"
                options={genders}
                optionLabel="label"
                optionValue="label"
                className="w-100"
                {...register('gender', {
                  required: {
                    value: true,
                    message: 'Gender is required'
                  }
                })}
              />
              <label htmlFor="gender">Select a Gender</label>
            </FloatLabel>
            <FileUpload
              className="w-100"
              {...register('passportPhoto', {
                required: {
                  value: true,
                  message: 'Passport photo is required'
                }
              })}
              accept="image/*"
              maxFileSize={5000000}
              cancelOptions={{ style: { display: 'none' } }}
              uploadOptions={{ style: { display: 'none' } }}
              chooseOptions={{ label: 'Passport Size Photo' }}
              previewWidth={120}
            />
            <FileUpload
              className="w-100"
              {...register('idPhoto', {
                required: {
                  value: true,
                  message: 'Passport photo is required'
                }
              })}
              accept="image/*"
              maxFileSize={5000000}
              cancelOptions={{ style: { display: 'none' } }}
              uploadOptions={{ style: { display: 'none' } }}
              chooseOptions={{ label: 'ID Photo' }}
              previewWidth={120}
            />

            <Button label="Submit" className="detail-btn p-button-raised rounded p-button-rounded" />
          </div>
        </form>
        <DevTool control={control} />
      </Card>
    </>
  );
}
export default DetailForm;
