class Contact{

    static all(){
        return axios.get('data/contacts.json');
    }

}

export default Contact;