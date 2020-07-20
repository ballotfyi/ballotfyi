import * as firebase from 'firebase/app';
import 'firebase/functions';
import { projectConfigs } from 'components/contexts/FirebaseProjectContext';

export const getProjectConfig = () => {
  const GcpEnv = process.env.REACT_APP_GCP_ENV;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const envParam = urlParams.get('env');
  //-- Order of precedence: URL param, Node env REACT_APP_GCP_ENV, default dev
  if (envParam && projectConfigs[envParam]) return projectConfigs[envParam];
  if (GcpEnv && projectConfigs[GcpEnv]) return projectConfigs[GcpEnv];
  return projectConfigs['dev'];
};

const getFirebaseConfig = (project) => {
  switch (project) {
    case 'ballotfyi':
      return {
        apiKey: 'AIzaSyBnaW2JO_1ALWqM9AhmE0TExrfWtlXCh88',
        authDomain: 'ballotfyi.firebaseapp.com',
        databaseURL: 'https://ballotfyi.firebaseio.com',
        projectId: 'ballotfyi',
        storageBucket: 'ballotfyi.appspot.com',
        messagingSenderId: '630816246880',
        appId: '1:630816246880:web:9a60fd43eba68c5c534705',
        measurementId: 'G-XL2BE6EJJD',
      };
    case 'ballotfyi-dev':
    default:
      return {
        apiKey: 'AIzaSyDZzCyrlJtT9b6dhQy4reQ2U0S7U3jCJn0',
        authDomain: 'ballotfyi-dev.firebaseapp.com',
        databaseURL: 'https://ballotfyi-dev.firebaseio.com',
        projectId: 'ballotfyi-dev',
        storageBucket: 'ballotfyi-dev.appspot.com',
        messagingSenderId: '607010102852',
        appId: '1:607010102852:web:8d4251445d6a88ef19e611',
        measurementId: 'G-XS512GXWX0',
      };
  }
};
firebase.initializeApp(getFirebaseConfig(getProjectConfig().project));

const db = firebase.firestore();
const subscribeEmail = firebase.functions().httpsCallable('subscribeEmail');
export { firebase, db, subscribeEmail };
