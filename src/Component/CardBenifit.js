import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Styles/styles.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 100,
    width: 100,
  },
});

export default function CardBenifit() {
  const classes = useStyles();

  return (
    <div className="benifitCardDiv">
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_AgreedSum.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                AGREED SUM OR MARKET VALUE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_NationwideWorkshops.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                NATIONWIDE ACCESS TO AUTHORISED PANEL WORKSHOPS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        {" "}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_WorkshopGuarantee.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                AUTHORISED PANEL WORKSHOP GUARANTEE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_Windscreen.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                WINDSCREEN COVERAGE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_LegalLiability.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                LEGAL LIABILITY TO PASSENGERS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_Strike.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                STRIKE, RIOT & CIVIL COMMOTION
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_LiabilityToPassengers.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                LEGAL LIABILITY TO PASSENGERS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_SprayPaint.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                SPRAY PAINT COVERAGE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} benifitCardImg`}
              image="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/benefit_TravelAssistance.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h4">
                24/7 EMERGENCY AUTO-ASSIST
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
