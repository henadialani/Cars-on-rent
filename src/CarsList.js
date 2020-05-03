import React, { Component } from 'react'

const CarsListBody = props => {
  const rows = props.cars.map((row, index) => {
    return (
      <div  class="card mb-2"  style={{maxWidth: "1000px"}}>

        <div class="row no-gutters">
            <div class="col-md-3">
                <img src={row.icon} class="card-img" style={{height:"140px", maxWidth:"100%"}} alt={row.name} />
            </div>
            <div class="col-md-6">
                <div class="card-body" >
                    <h5 class="card-title">{row.name}</h5> <br /> 
                    <i class="fas fa-palette" style={{fontSize:"15px", color:"gray"}}></i>
                    <i> {row.color} </i>&nbsp; &nbsp;
                    <i class='fas fa-user-friends' style={{fontSize:"15px", color:"gray"}}></i> &nbsp;
                    <i> {row.capacity}</i>
                    <i class="col-md-2"> {row.price}</i> 
                    
                    <div class="modal" id={"myModal"+index}>
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">{row.details.model}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>
                          <div class="modal-body">
                            Model: {row.details.model}<br/>
                            Features: {row.details.features}<br/>
                            Color: {row.color}<br/>
                            Vehicle no: {row.details.vehicleNo}<br/>
                            Fuel type: {row.details.fuel}<br/>
                            Max seating capacity: {row.details.maxSeating}<br/>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2 float-right" style={{marginTop:"20px", marginRight:"2px"}}>
                <a href={"booking.html?car="+row.id} class="btn btn-info float-right" role="button">Book now</a>
                <br/><br/>
                <button type="button" class="btn btn-secondary float-right" data-toggle="modal" data-target={"#myModal"+index}>Details</button>
            </div>
         </div>
       </div>
    )
  })

  return <div>{rows}</div>
}

class CarsList extends Component {
  render() {
    const { cars } = this.props

    return (
        <CarsListBody cars={cars} />
    )
  }
}

export default CarsList