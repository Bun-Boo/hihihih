import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonNav } from '@ionic/react';

import PageOne from './page-one'
const Home: React.FC = () => {
  return <IonNav root={() => <PageOne />}></IonNav>
  
};

export default Home;
