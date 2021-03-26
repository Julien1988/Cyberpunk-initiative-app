import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';


const NewPunk = () => {
    const { user, error, isLoading } = useUser();
    // if
    if (isLoading) return <div>Loading...</div>;
    if(!user) return <div><h1>You need to be connected</h1></div>
    if (error) return <div>{error.message}</div>;
    // end if
    const [form, setForm] = useState({ name: '', intiative: 0, is_player: false, user_id: user.sub });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter()

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                //createPunk();
                alert('submit');
            } else {
                setIsSubmitting(false);
            }
        }
    },[errors])

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    };
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const validate = () => {
        let err = {};
        if (!form.name) {
            err.name = 'Name is required';
        }
        if (!form.initative) {
            err.name = 'Initiative is required';
        }
        if (!form.isplayer) {
            err.name = 'Isplayer is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Create Punk</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input fluid label='Name' placeholder='Name' name='name' onChange={handleChange} />
                            <Form.Input fluid label='Initiative' placeholder='Initiative' name='initiative' onChange={handleChange} />
                            <Form.Input fluid label='IsPlayer' placeholder='IsPlayer' name='isplayer' onChange={handleChange} />
                            <Button type='submit'>Create</Button>

                        </Form>
                }
            </div>
        </div>
    )
}

export default NewPunk