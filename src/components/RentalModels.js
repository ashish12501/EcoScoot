import './styles/RentalModels.css'
import { useState } from 'react';



export function RentalModels({ bikeData }) {
  const [selectedCar, setSelectedCar] = useState(bikeData[0]);

  return (
    <div className='RentalModel'>
      <div className='RentalModelGrp'>
        <div className='Modelsbox1'>
          <h3>Vehicle models</h3>
          <h1>Wide range of vehicles to choose</h1>
          <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className='Modelsbox2'>
          <div className='bikeNames'>
            {bikeData.map((bike) => (<button key={bike.name}
              onClick={() => setSelectedCar(bike)}
              className={selectedCar === bike ? 'selected' : ''}>{bike.name}</button>))}

          </div>
          <div className='bikeImage'>
            <img src={selectedCar.image} alt=""></img>

          </div>
          <div className='bikeSpecs'>
            <div className='Price'><h2><span>&#8377;{selectedCar.price}</span>/ rent per day</h2></div>

            <div className='Specs'>
              <div className='specbox1'>
                <h3 className='SpecID'>Speed</h3>
              </div >
              <div>
                <h3 className='SpecValue'>{selectedCar.speed}</h3>
              </div>
            </div>

            <div className='Specs'>
              <div className='specbox1'>
                <h3 className='SpecID'>Range</h3>
              </div>
              <div><h3 className='SpecValue'>{selectedCar.range}</h3></div>
            </div>

            <div className='Specs'>
              <div className='specbox1'>
                <h3 className='SpecID'>Battery</h3>
              </div>
              <div><h3 className='SpecValue'>{selectedCar.battery}</h3></div>
            </div>

            <div className='Specs'>
              <div className='specbox1'>
                <h3 className='SpecID'>Charging</h3>
              </div>
              <div><h3 className='SpecValue'>{selectedCar.charging}</h3></div>
            </div>

            <div className='Specs'>
              <div className='specbox1'>
                <h3 className='SpecID'>Motor</h3>
              </div>
              <div><h3 className='SpecValue'>{selectedCar.motorPower}</h3></div>
            </div>
            <button className='RideNow'><a href="#BookingPage">Ride Now</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

