const getMessages = () => {
        return axios.get('/api/messages'); // Adjust the endpoint as necessary
    };
export default { 
        getMessages
}