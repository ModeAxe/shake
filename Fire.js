import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDbl0xq7fnzfaAuJ4grd-9qmKvg5KxOOrc",
    authDomain: "shake-22212.firebaseapp.com",
    projectId: "shake-22212",
    storageBucket: "shake-22212.appspot.com",
    messagingSenderId: "29267536794",
    appId: "1:29267536794:web:71248c70ecf54c076a6823",
    measurementId: "G-KGC8DZC5MQ"
  };

class Fire {
    constructor(){
        this.init();
        this.observeAuth();
    };
    
    init = () => {
        firebase.initializeApp(firebaseConfig);
    };
        
    observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    
    onAuthStateChanged = user => {
        if (!user) {
            try {
            firebase.auth().signInAnonymously();
            } catch ({ message }) {
            alert(message);
            }
        }
    };
    
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    getShake = () => {
        // firebase.database().ref('shaking').on("value", (snapshot) => {
        //     const stat = snapshot.val();
        //     return "nope"
        // });
        var status = firebase.database().ref('shaking').set("nope");
        return status        
    }

    setShake = (status) =>{
        firebase.database().ref('shaking').set(status);
    }

        
};

Fire.shared = new Fire();
export default Fire;




  