import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {

    const contactContext =useContext(ContactContext);

    const {addContact, current, clearCurrent, updateContact} = contactContext;

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
                });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const clearAll = () => {
        clearCurrent();
    }

    const {name, email, phone, type} = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
        addContact(contact);
        } else {
            updateContact(contact);
        }

        
        setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
        });
    }

  return (
    <form onSubmit={onSubmit}> <h2 className='text-primary '>{current ? 'Edit Contact' : 'Add Contacts'} </h2>  
        <h2 className='text-primary'>
            <input 
            type='text' 
            placeholder='Name' 
            name='name'
            value={name} 
            onChange={onChange}
                />
            <input 
            type='email' 
            placeholder='Email' 
            name='email'
            value={email} 
            onChange={onChange}
                />
             <input 
            type='text' 
            placeholder='Phone' 
            name='phone'
            value={phone} 
            onChange={onChange}
                />
            <h5>Contact Type</h5>
            <input 
            type='radio' 
            name='type'
            value="personal"
            checked={ type === 'personal'}
            onChange={onChange}
                /> Personal{''}
                <input 
            type='radio' 
            name='type'
            value="professional"
            checked={ type === 'professional'}
            onChange={onChange}
                /> Proffesional   
            <div>
                <input 
                type='submit' 
                value={current ? 'Update Contact' : 'Add Contacts'} 
                className='btn btn-primary btn-block'></input>
            </div>
            {current && <div>
                <button className='btn btn-light btn-block' onClick={clearAll}> Clear </button>
                    </div>
                    }
        </h2>
      
    </form>
  )
}

export default ContactForm
