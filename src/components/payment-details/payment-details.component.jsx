import React from 'react';
import {Button, Card} from "antd";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useAuth} from "../../useAuth";
import {Container} from "./payment-details.styles";


const ReviewComponent = () => {
  const {signOutAmplify} = useAuth();
  const history = useHistory();
  const paymentData = useSelector(state => state.payment);
  const {paymentType, createdAt, paymentAmount, validThrough} = paymentData.payment;
  const {first_name, last_name, phone, address, role, email} = paymentData.user;

  const handleClick = async () => {
    await signOutAmplify();
    history.push('/');
  };

  return (
    <>
      <Container>
        <Card title="Membership Subscription Details" bordered style={{width: "100%"}}>
          <>
            <p><strong>Name:</strong> {first_name}{' '}{last_name}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Amount:</strong> ${(parseFloat(paymentAmount) / 100).toFixed(2)}</p>
            <p><strong>Type of Payment:</strong> {paymentType}</p>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Created:</strong> {new Date(createdAt).toLocaleString()}</p>
            <p><strong>Ends:</strong> {new Date(validThrough).toLocaleString()}</p>
          </>
          <Button
            type="ghost"
            block size={'large'}
            onClick={handleClick}
          >
            Exit
          </Button>
        </Card>
      </Container>
    </>
  );

};

export default ReviewComponent;