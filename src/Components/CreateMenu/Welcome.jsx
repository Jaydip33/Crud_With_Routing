import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Welcome() {
    return (
        <>

            <h2>Welcome To My Gallary</h2>
            <br />

            <Card sx={{ maxWidth: 345, display: "inline-table", margin: "10px" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Plants
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tiny delicate plants take root in an inhospitable crack on a barren concrete path, struggling to survive and grow in difficult environmental conditions.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, display: "inline-table", margin: "10px" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcjSGis5KE8L7O-OrHhk4IgUrOJKkUlwORA&usqp=CAU"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Generating Random Numbers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The term random number has been used by many scholars to explain the behaviour of a stochastic system.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, display: "inline-table", margin: "10px" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyPsC-WOTRffoXvCe-VYnG_97c8b7qavsTA&usqp=CAU"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pace Gallery’s
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pace Verso, Pace Gallery’s web3 hub, and Snark.art’s OG.Art NFT platform are pleased to announce a new generative NFT project by Random International in collaboration with multidisciplinary digital artist Danil Krivoruchko.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
