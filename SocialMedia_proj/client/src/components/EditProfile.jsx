import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'

const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [picture, setPicture] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: { ...user },
    });
    const onSubmit = async (data) => { }
    return (
        <div className='fixed z-50 inset-0 overflow-y-auto'>

            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <div className='fixed inset-0 transition-opacity'>
                    <div className='absolute inset-0 bg-[#000] opacity-70'>

                    </div>
                </div>
                <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
                &#8203;
                <div className='inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-headline'>

                </div>
            </div>


        </div>
    )
}

export default EditProfile