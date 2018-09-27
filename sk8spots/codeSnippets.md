{
    "somedaySpots" : [
        {
            id: 1,
            image_url:'https://i.ytimg.com/vi/yfoD24rLiNQ/maxresdefault.jpg' ,
            name: 'Burnside Skatepark',
            country: 'United States',
            address: 'SE 2nd Ave, Portland, OR 97232',
            city: 'Portland',
            state: 'Oregon',
            description:
        },
        ...
    ]
}

//Denver Skatepark     ////////////////////////////////////////////////////////////////////

https://img1.10bestmedia.com/Images/Photos/316562/p-maxresdefault_54_990x660.jpg

Boasting 60,000 square feet of skateable, concrete terrain, the park challenges boarders, bladers, and bikers of all levels (bring your own gear - no rentals available.) Pegs are not allowed on bicycles. Admission is free and the park is open seven days a week.

//Alf-skateboard:
http://static.shoplightspeed.com/shops/604229/files/006379326/fa-skates-fa-alf-deck.jpg
https://img.discogs.com/YY0cPqCooT4-96MubpeaVRpbAb4=/fit-in/600x584/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1093348-1208556674.jpeg.jpg

//Sk8-babes    ///////////////////////////////////////////////////////////////////////////////////////

hot-babe: https://i.pinimg.com/originals/40/8e/4f/408e4fdfeff611dfb01b2e4e6c7b23a6.jpg
hot-babe2: http://kuapp.me/wp-content/uploads/2018/05/skater-girl-hot-girls-skateboarding-wear.jpg

//Old-school skaters   //////////////////////////////////////////////////////////////////////////////

d-muthrpumpn-p: https://i.pinimg.com/originals/92/6b/93/926b934f5175f1fdb56c70f340b93913.jpg

mutt: http://www.mastiffhaven.com/wp-content/uploads/589-best-80-s-skateboarding-images-on-pinterest-rodney-mullen.jpg

lance-mountain: http://www.jenkemmag.com/home/wp-content/uploads/2015/11/lanceheader.png

skatin-granny: http://www.allmystery.de/i/t33116e_1150363_d41c_625x1000.jpg

//Sex-pistol colors:     //////////////////////////////////////////////////////////////////////////////
green: #36F62D;
hover-green: #14dc09;
pink: #FB1E7A;
hover-pink: #e20360;
yellow: #FCED45;
hover-yellow: #e2d003;

light-yellow: #fdf59b, #fefacd, #fefce6;
hover lt-yell: #fdf7b4, #fefacd;


// onClick functions:  //////////////////////////////////////////////////////////////////////////////

Someday:

    Someday delete:

        onClick={(event) => props.deleteSomedaySpot(event, props.spot.id)}

    Someday edit (from EditSomedaySpot):

        onSubmit={(event) => this.handleSubmit(event, this.props.location.state.spot.id)}

Yesterday:

    Yesterday delete:

        onClick={(event) => props.deleteYesterdaySpot(event, props.spot.id)}

    Yesterday edit (from EditYesterdaySpot):

        onSubmit={(event) => this.handleSubmit(event, this.props.location.state.spot.id)}


