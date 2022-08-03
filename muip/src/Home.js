import React from "react";
import Appbar from "./Appbar";

import {Autocomplete, Avatar, Breadcrumbs, Button, Card, CardContent, Grid, Link, TextField, Typography } from '@mui/material'
import {Call, ExpandMore, Facebook, Share, Twitter} from '@mui/icons-material'
import image1 from "./images/image1st.jpg"
import image2 from "./images/image2nd.jpg"
import image3 from "./images/image3rd.jpg"
import im1 from "./images/image1.jpg"
import im2 from "./images/img5.jpg"
import im3 from "./images/img6.jpg"
import im4 from "./images/img7.jpg"
import im5 from "./images/img8.jpg"
import im6 from "./images/img9.jpg"
import im7 from "./images/img10.jpg"
import im8 from "./images/img11.jpg"
import im9 from "./images/img12.jpg"
import im10 from "./images/img13.jpg"
import im11 from "./images/img14.jpg"
import im12 from "./images/img15.jpg"
import im13 from "./images/img16.jpg"
import im14 from "./images/img17.jpg"
import im15 from "./images/img18.jpg"
import im16 from "./images/img19.jpg"
import img17 from "./images/paymentImg.png"




function Home(){    

    const top100 = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]

    return(
        
        
        
        
        <>
        
        <Appbar/>
        <Grid container>
        
        <Grid lg = {2}>
            <Typography variant="h4">meroStore.COM</Typography>  
        </Grid>
        
        <Grid lg = {8}>
         <div style={{ marginTop:"5px", marginLeft:"70%"}}>
         <Button variant = "contained" color = "secondary" style = {{ MarginLeft:"8px"}}>Cart</Button>
          <Button variant = "contained" color = "secondary" style = {{ MarginLeft:"10px"}}>Login</Button>
          <Button variant = "contained" color = "secondary" style = {{ MarginLeft:"10px"}}>Sign Up</Button>
          </div>




          </Grid>
          <div style={{marginLeft:"50%", marginTop:"-8px"}} >
          <Breadcrumbs separator = "|" sx = {{p:3}}>
          <Link color = "inherit" >CUSTOMER CARE</Link>
          <Link color = "inherit" >Track ORDER</Link>
          <Link color = "inherit">My Account</Link>
          <Link color = "inherit">Help</Link>
          </Breadcrumbs>
        
        <Grid container>
            <Grid lg={6}>
<Grid container>
            <Grid lg={10}>
                <Autocomplete options={top100} renderInput={(aak)=><TextField {...aak}  label="serch" fullWidth size="small"/>}/>
            </Grid>
            <Grid lg={2}>
        <Button variant="contained">search</Button>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
          </div>

        </Grid>



     <Grid container style = {{background:"blue"}}>
        <Grid lg={1}>
            <Typography>FRUIT <ExpandMore/></Typography>

            
        </Grid>
        <Grid lg = {2}>
            <Typography>VEGETABLES <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {1}>
            <Typography>MEAT <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {1}>
            <Typography>SEAFOOD <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {2}>
            <Typography>DAHI&CHEESE <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {1}>
            <Typography>BAKERY <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {2}>
            <Typography>BEVERAGES <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {1}>
            <Typography>FROZEN <ExpandMore/></Typography>
        </Grid>
        <Grid lg = {1}>
            <Typography>WINES <ExpandMore/></Typography>
        </Grid>

        </Grid>

        {/* <Grid lg={6}>
            <img src = {img1} class="image-responsive"/>
        
        </Grid> */}
<Grid container>
        <Grid lg={8}>
        <img src = {image1} height = "300px" width="100%"/>
        <Typography variant = "h2" style={{color:"white",marginTop:"-300px", paddingLeft:"20px"}}>LOREM IPSUM </Typography>
        <Typography variant="h4" style = {{color:"white",paddingLeft:"20px"}}>DUMMY TEXT</Typography> 
        <Typography variant = "h2" style = {{textAlign:"right",color:"white", marginTop:"60px", paddingRight:"40px"}}>LOREM IPSUM</Typography>
        <Typography varinat = "h4" style = {{textAlign:"right",color:"white",paddingRight:"40px"}}>20% DISCOUNT</Typography>
        
        </Grid>
    
        <Grid lg = {4}>
            <Grid container>
            <Grid lg={12}>
            <img src = {image2} height="150px" width="100%" />
            {/* <Typography variant = "h4" style={{marginLeft:"30px",marginTop:"-100px"}}>FREE HOME DELIVERY</Typography> */}
            </Grid>

            <Grid lg={12}>
            <img src = {image3} height="149px" width="100%" />
            {/* <Typography variant = "h4"  style={{marginLeft:"30px",marginTop:"-100px"}}>BEST DEAL</Typography> */}
            </Grid>

            </Grid>       
    </Grid>
    </Grid>
        <Grid container>
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                       <img src = {im1} height= "100px" width="100%" />

                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                    
                </Card>
                </CardContent>
            </Grid>
        
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im2} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
        
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im3} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
        
       
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im4} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
   </CardContent>
            </Grid>
        </Grid>




        <Grid container>
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im5} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
      
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im6} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
       
       
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im7} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
              </CardContent>
            </Grid>
        
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im8} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
        </Grid>



        <Grid container>
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im9} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
             </CardContent>
            </Grid>
       
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im10} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
             </CardContent>
            </Grid>
       
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im11} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
              </CardContent>
            </Grid>
        
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im12} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>

            </Grid>
        </Grid>
        <Grid container>
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im13} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>

            </Grid>
        
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im14} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>

            </Grid>
      
       
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im15} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>

            </Grid>
     
        
            <Grid lg = {3}>
                <CardContent>
                <Card>
                    <CardContent>
                        <img src = {im16} height = "100px" width = "100%"/>
                    </CardContent>
                    <Typography variant = "h6" style = {{textAlign:"center",fontWeight:"bold", color:"blue"}}>FRUIT BASKET</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold",fontSize:"20px"}}>PRICE</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-25px",fontWeight:"bold",color:"red"}}>$03</Typography>
                    <Typography variant = "h6" style = {{textAlign:"left",marginLeft:"10px",marginTop:"-15px",fontWeight:"bold"}}>QUANTITY</Typography>
                    <Typography variant = "h6" style = {{textAlign:"right",marginRight:"10px",marginTop:"-20px",fontWeight:"bold",color:"red"}}>1Kg</Typography>
                    <Button variant = "contained" color = "secondary" style = {{marginLeft:"105px", marginTop:"5px"}}>Add to Cart</Button>
                </Card>
                </CardContent>
            </Grid>
        </Grid>
        <Grid container style = {{height:"100px",backgroundColor:"blue",}} >
            <Grid lg = {12} >
                <Grid container>
                    <Grid lg = {6}>
                <Typography variant="h6" style={{fontWeight:"bold",marginLeft:"20%",marginTop:"25px",color:"white",fontSize:"40px"}}>SUBSCRIBE NOW</Typography>
               </Grid>
               <Grid lg = {6}>
                <TextField  placeholder="EmailAddress" style={{backgroundColor:"white",marginTop:"20px",marginRight:"20px", width:"80%"}}></TextField>
                <Button variant = "contained" color = "secondary" style={{marginTop:"20px",marginLeft:"-20px",height:"58px"}}>Search</Button>
                </Grid>
                </Grid>
            </Grid>
            
        </Grid> 

        <Grid container style={{backgroundColor:"black",height:"200px"}}>
            
                <Grid lg = {3}>
                    <Typography variant="h6" color = "white">meroStore.COM</Typography>
                    <Typography variant = "h6" color = "white">345/6 Downstreet</Typography>
                    <Typography variant = "h6" color = "white">City.Postal Code</Typography>
                    <Typography variant = "h6" color = "white">State,country</Typography>
                </Grid>
                <Grid lg = {3}>
                   <Typography variant = "h6" color = "white">Services</Typography>
                  
<Typography variant = "h6" color = "white"><Link href="#">DownloadApp</Link></Typography>
<Typography variant = "h6" color = "white"><Link href = "#">Offers & Discount</Link></Typography>
<Typography variant = "h6" color = "white"><Link href = "#">e-Gift Voucher</Link></Typography>
<Typography variant = "h6" color = "white"><Link href = "#">Contact Us</Link></Typography>


                </Grid>
                <Grid lg = {3}>
                     <Typography variant = "h6" color = "white">Imp.Links</Typography>
                     <Typography variant = "h6" color = "white"><Link href = "#">Return Policy</Link></Typography>
                     <Typography variant = "h6" color = "white"><Link href = "#">Privacy Pilicy</Link></Typography>
                     <Typography variant = "h6" color = "white"><Link href = "#">Terms & Conditions</Link></Typography>
                     <Typography variant = "h6" color = "white"><Link href = "#">Partners / Affiliate Plan</Link></Typography>
                     {/* <Link to = "#">FAQ</Link>
                     <Link to = "#">Return Policy</Link>
                     <Link to = "#">Privacy Policy</Link>
                     <Link to = "#">Terms & Conditions</Link>
                     <Link to = "#">Partners/Affiliate Plan</Link> */}
                </Grid>
                <Grid lg = {3}>
                     <Typography variant = "h6" color = "white">PAYMENT METHOD</Typography>
                     <img src = {img17} style = {{height:"100px"}}/>
                </Grid>
          
            
            
            
            
            
            </Grid>
        <Grid container style = {{backgroundColor:"black", color:"black",display:"flex"}}>
               <Grid lg = {6}>
               <Avatar variant = "square" ><Share/></Avatar>
               <Avatar variant = "square" style={{marginTop:"-70px",marginLeft:"40px"}}><Facebook/></Avatar>
               <Avatar variant = "square" style={{marginTop:"-70px",marginLeft:"80px"}} ><Twitter/></Avatar>
               <Avatar variant = "square" style={{marginTop:"-70px",marginLeft:"120px"}}></Avatar>
               <Avatar variant = "square" style={{marginTop:"-70px",marginLeft:"160px"}}><Call/></Avatar>
               </Grid>
               <Grid lg = {2}>
                    <Typography variant = "h6" color = "white">Copyright 2015</Typography>
                </Grid>
                <Grid lg ={2}>
                    <Typography variant= "h6" color = "white">All rights reserved.</Typography>
                </Grid>


                </Grid>
           

        </>
    )
}

export default Home;