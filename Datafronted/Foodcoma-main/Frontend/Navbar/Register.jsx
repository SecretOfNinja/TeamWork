import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import userIcon from './images/user.png';
import registerImg from './images/register.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 
import { auth, db, doc, setDoc, serverTimestamp } from '../src/Firebase/Firebase';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });

  const history = useNavigate(); 

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

      const userDocRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userDocRef, {
        username: credentials.username,
        email: credentials.email,
        createdAt: serverTimestamp(),
      });

      // Update the user profile with the provided username
      await updateProfile(userCredential.user, {
        displayName: credentials.username,
      });

      console.log('Registration successful');

      // Redirect to the homepage after successful registration
      history('/');
    } catch (error) {
      console.error('Registration failed', error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt='' />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input
                      type='text'
                      placeholder='Username'
                      required
                      id='username'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='email'
                      placeholder='Email'
                      required
                      id='email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      id='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to='/login'>Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
