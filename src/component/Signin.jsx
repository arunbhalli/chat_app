import React from 'react';
import firebase from 'firebase/compat/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
const Signin = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.Timestamp,
        });
      }

      Alert.success('Signed in', 4000);
    } catch (error) {
      Alert.info(error.message, 4000);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to the Chat app</h2>
                <p>
                  This is our chat room and chat freely to your friends and
                  family with our App
                </p>
              </div>
              <div>
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook"> continue with facebook</Icon>
                </Button>
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google"> continue with Google</Icon>
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
