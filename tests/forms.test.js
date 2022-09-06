module.exports = {
    "Should successfully fill out the left form": (client) =>{
        client
            .url(`https://ultimateqa.com/filling-out-form`)
            .verify.title('Filling Out Forms - Ultimate QA')
            .setValue('#et_pb_contact_name_0', 'John Doe')
            .setValue('#et_pb_contact_message_0', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
            .submitForm('#et_pb_contact_form_0 form')
            // .expect.element('#et_pb_contact_form_0').text.to.be.equal('Thanks for contacting us')
    }
};