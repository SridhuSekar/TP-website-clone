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
    maxWidth: 350,
  },
  media: {
    height: 110,
    width: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <div className="title">
        <h1>
          Drive less? Get PAYD (Pay-As-You-Drive) for up to 20% refund on your
          motor premium
        </h1>
      </div>
      <div className="cardDiv">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} cardImg`}
              image="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1593147407657_1588147046591_1587364409765_payD.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="span" component="h2">
                PAYD eligibility criteria
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Age of Insured: 28 – 65 years old; Age of Vehicle: 0 to 10
                years; Sum insured: RM40,000 to RM300,000; Car Type: Private car
                for private use
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div>
          {" "}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={`${classes.media} cardImg`}
                image="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1593147407657_1588147046591_1587364409765_payD.png"
                // image="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1571992763914_general_logo.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="span" component="h2">
                  PAYD eligibility criteria
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Age of Insured: 28 – 65 years old; Age of Vehicle: 0 to 10
                  years; Sum insured: RM40,000 to RM300,000; Car Type: Private
                  car for private use
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
          </Card>
        </div>
        <div>
          {" "}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={`${classes.media} cardImg`}
                image="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1593147407657_1588147046591_1587364409765_payD.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="span" component="h2">
                  PAYD eligibility criteria
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Age of Insured: 28 – 65 years old; Age of Vehicle: 0 to 10
                  years; Sum insured: RM40,000 to RM300,000; Car Type: Private
                  car for private use
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
}
