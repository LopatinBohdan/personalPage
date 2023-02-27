import React from 'react';

export default class Person extends React.Component{
    static info={name:"name", phone:"0000", email:"email", city:"City"}; 

    constructor(props){
        super(props);
        // this.state ={name: Person.info.name, phone:Person.info.phone, email:Person.info.email, city:Person.info.city};

        var name=props.name;
        var nameIsValid=this.validateName(name);

        var phone=props.phone;
        var phoneIsValid=this.validatePhone(phone);

        var email=props.email;
        var emailIsValid=this.validateEmail(email);

        var city=props.city;
        var cityIsValid=this.validateCity(city);

        this.state={name:name, phone:phone, email:email, city:city,nameValid:nameIsValid,phoneValid:phoneIsValid,emailValid:emailIsValid, cityValid:cityIsValid  };

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.btnSubmit=this.btnSubmit.bind(this);
        this.btnReset=this.btnReset.bind(this);
    }

    // Name
    validateName(name){
         return name?.length>2;
        // return true;
    }
    onChangeName(e){
        var val=e.target.value;
        console.log(val);
        var valid=this.validateName(val);
        this.setState({name:val, nameValid:valid});
    }
    // Phone
    validatePhone(phone){
        return phone?.length==4;
         return true;
    }
    onChangePhone(e){
        var val=e.target.value;
        var valid=this.validatePhone(val);
        this.setState({phone:val, phoneValid:valid});
    }
    // Email
    validateEmail(email){
        return email?.length>4;
        // return true;
    }
    onChangeEmail(e){
        var val=e.target.value;
        var valid=this.validateEmail(val);
        this.setState({email:val, emailValid:valid});
    }
    // City
    validateCity(city){
        return city?.length>2;
        // return true;
    }
    onChangeCity(e){
        var val=e.target.value;
        var valid=this.validateCity(val);
        this.setState({city:val, cityValid:valid});
    }
    // Submit
    btnSubmit(e){
        e.preventDefault();
        if(this.state.nameValid===true && this.state.phoneValid===true && this.state.emailValid===true && this.state.cityValid===true){
            alert(`Name: ${this.state.name} Phone: ${this.state.phone} Email: ${this.state.email} City: ${this.state.city}`);
        }
    }
    Reset
    btnReset(event){
        event.preventDefault();
        this.setState({name:Person.info.name}, {phone:Person.info.phone}, {email:Person.info.email}, {city:Person.info.city});
    }

    render(){
        var nameColor=this.state.nameValid===true?"green":"red";
        var phoneColor=this.state.phoneValid===true?"green":"red";
        var emailColor=this.state.emailValid===true?"green":"red";
        var cityColor=this.state.cityValid===true?"green":"red";

        return(
            <>
                <form onSubmit={this.btnSubmit}>
                    <label>Name:</label><br></br>
                    <input value={this.state.name} onChange={this.onChangeName} style={{borderColor:nameColor}}></input><br></br>
                    <label>Phone:</label><br></br>
                    <input value={this.state.phone} onChange={this.onChangePhone} style={{borderColor:phoneColor}}></input><br></br>
                    <label>Email:</label><br></br>
                    <input value={this.state.email} onChange={this.onChangeEmail} style={{borderColor:emailColor}}></input><br></br>
                    <label>City:</label><br></br>
                    <input value={this.state.city} onChange={this.onChangeCity} style={{borderColor:cityColor}}></input><br></br>
                    <button onClick={this.btnSubmit}>Submit</button>
                    <button onClick={this.btnReset}>Reset</button>
                </form>
            </>
        )
    }
}