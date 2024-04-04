"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ContactForm.module.css";
export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle the form submission here
    };

    return (
        <div className={styles.contact}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}

                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                {errors.email && (
                    <span>Please enter a valid email address</span>
                )}

                <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Your Message"
                    {...register("message", { required: true })}
                />
                {errors.message && <span>This field is required</span>}

                <button className={styles.submit} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
