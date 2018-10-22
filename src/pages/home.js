import React from 'react';
import TitleHeader from '../components/titleHeader';
import { indigo400,redA400, amberA400, lightBlueA400 } from 'material-ui/styles/colors';
import data from '../requests/places';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardText, CardMedia, CardTitle} from 'material-ui/Card'
import '../App.css';
var images = process.env.PUBLIC_URL + '/images/';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
          numero:0
        };
        // setInterval(()=>{
        //   this.setState({
        //   numero:this.state.numero+1
        //   })
        // },1000)
        this.updateNumero = this.updateNumero.bind(this);
      }
      
      updateNumero(){
        this.setState({
          numero:this.state.numero+1
        })
      }
    places(){
        return data.places.map((place,i)=>{
          return(
            <div className="col-xs-12 col-sm-4" key={i}>
              <Card>
                <CardMedia>
                  <img src={images+place.imageUrl} alt={place.title}></img>  
                </CardMedia>
                <CardTitle title={place.title}></CardTitle>
                <CardText>{place.description}</CardText>
              </Card>
            </div>
          )
        })
      }
    render(){
        return(
        <section>
            <div className="header">
            <div style={{"width":'80%',"margin":"0 auto"}}>
                <div className="header-main">
                <TitleHeader title='Adriano Chiliseo'></TitleHeader>
                <h2>{this.state.numero}</h2>
                {/* <button onClick={()=>console.log('hola mundo')}>Crea tu cuenta</button> */}
                <RaisedButton label="Creta tu cuenta" primary={true} onClick={this.updateNumero}></RaisedButton>
                {/* <button onClick={this.updateNumero}>Crea tu cuenta</button> */}
                <img className="header-img" src={images+'top2.png'} alt="top" height="200"></img>
                </div>
                <div>
                <ul>
                    <Card className="cardContent">
                    <CardText>
                        <div className="row">
                        <div className="card-img" style={{'backgroundColor':redA400}}>
                            <img src={images+'heart.png'} alt="1"/>
                        </div>        
                        <div className="card-text">
                            <h3>Califica con emociones</h3>
                            <p>podras calificar tus lugares con exprecienas, no con numeros.</p>
                        </div>
                        </div>
                    </CardText>
                    </Card>
                    <Card className="cardContent">
                    <CardText >
                        <div className="row">
                        <div className="card-img" style={{'backgroundColor':lightBlueA400}}>
                            <img src={images+'no-wifi.png'} alt="1"/>
                        </div>        
                        <div className="card-text">
                            <h3>Sin internet? sin problemas</h3>
                            <p>Places funciona sin internet o conexiones lentas</p>
                        </div>
                        </div>
                    </CardText>
                    </Card>
                    <Card className="cardContent">
                    <CardText>
                        <div className="row">
                        <div className="card-img" style={{'backgroundColor':amberA400}}>
                            <img src={images+'star.png'} alt="1"/>
                        </div>        
                        <div className="card-text">
                            <h3>Tus lugares favoritos</h3>
                            <p>Define tu lista de sitios favoritos en un solo lugar</p>
                        </div>
                        </div>
                    </CardText>
                    </Card>
                </ul>
                </div>
            </div>
            </div>
            <div className="container-fluid">
            <div style={{'backgroundColor':indigo400, 'padding':'50px'}} className="row">
                {this.places()}
            </div> 
            </div>
        </section>
        );
    }
}