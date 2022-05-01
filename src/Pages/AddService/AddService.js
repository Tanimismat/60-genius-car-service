import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    };
    return (
        <div>
            <h3>Please Add a Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                {/* <input {...register("description", { pattern: /^[A-Za-z]+$/i })} placeholder='Description' /> */}
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" placeholder='Price' {...register("price", { min: 18, max: 99 })} />
                <input type="text" placeholder='Photo URL' {...register("img", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;