import ButtonNoLink from "./ButtonNoLink"
import {FormComponent, FormComponentTextArea} from "./FormComponent"
const EmailForm = ()=>{

    const handleSubmit =(e)=>{
        e.preventDefault()
        const subject = e.target.subject.value
        const message = e.target.message.value
        window.location.href = `mailto:fitria.dharmawan13@gmail.com?subject=${subject}&body=${message}`;
        
    }
    return(
        <div className="w-3/5 mt-20 max-lg:w-full max-lg:bg-black" >
            <p className="text-white font-medium text-lg text-center">
                send me an Email
            </p>
            <hr className='w-full mt-2 h-2 mb-2' style={{ color: 'white', borderWidth: '3px' }} />

            <form onSubmit={handleSubmit}>
      <FormComponent htmlFor='subject' name='subject' id='subject' type='text'>
        Subject
        </FormComponent>
        <FormComponentTextArea htmlFor='message' name='message' id='message'>
        Message
        </FormComponentTextArea>
                <ButtonNoLink m='m-0' w='w-full'>Send Message</ButtonNoLink>
            </form>
        </div>
    )
}
export default EmailForm