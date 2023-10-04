import { Box, Typography } from "@mui/material";
import React from "react";

function Home(props) {
    return (
        <Box>
            <Box>
                <div>
                    <Typography variant="h2">Overview Of Gallry</Typography>
                    <Typography>
                        With digitization of almost all the facets of our daily lives, it is
                        important for our Jain community to come together on a same
                        platform. The purpose of this responsive website is to provide a
                        single platform from which all Sanghs, their Honorable Trustees and
                        members can connect to their Sanghs, their Pathshalas and events.
                        For this, Vnurture has created a website based on the requirements
                        provided, with a purpose to have a centralized database of Trusts,
                        Sanghs and Pathshala under each Sangh.
                    </Typography>
                </div>
            </Box>
            <br />
            <div>
                <div>
                    <Typography variant="h4">HIGHLIGHTS OF BENEFITS</Typography>
                </div>
                <div>
                    <Typography variant="h6" color="lightBlack">
                        Following information will be readily available to all the
                        registered Jain Sangh around the globe:
                    </Typography>
                    <ul>
                        <div>
                            <Typography>Members and Trustees</Typography>
                        </div>
                        <div>
                            <Typography>Centralized and Updated Sangh </Typography>
                        </div>
                        <div>
                            <Typography>Sangh Facilities Details</Typography>
                        </div>
                        <div>
                            <Typography>Member Services </Typography>
                        </div>
                        <div>
                            <Typography>Sangh Internal Groups </Typography>
                        </div>
                        <div>
                            <Typography>Pathshala </Typography>
                        </div>
                    </ul>
                </div>
            </div>
            <Box>
                <div>
                    <Typography variant="h4">HIGH-LEVEL FUNCTIONALITY</Typography>
                    <Typography color="lightBlack">Super Admin will be able to::</Typography>
                    <Box>
                        <Box>
                            <div>
                                <Typography variant="h6">Create, Edit and Update:</Typography>
                            </div>
                            <Typography>
                                <ul>
                                    <li>Trust and Sangh pages</li>
                                    <li>Sangh Administrator with specific rights</li>
                                    <li>Pathshala under each Sangh</li>
                                    <li>Pathshala Teacher</li>
                                </ul>
                            </Typography>
                        </Box>
                        <Box>
                            <div>
                                <Typography variant="h6">Add and Delete:</Typography>
                            </div>
                            <Typography>
                                <ul>
                                    <li>
                                        Downloadable PDF forms for particular Trust and Sangh.
                                    </li>
                                    <li>
                                        News and notifications which will be displayed on home page.
                                    </li>
                                    <li>Special notification for any member.</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    );
}

export default Home;
