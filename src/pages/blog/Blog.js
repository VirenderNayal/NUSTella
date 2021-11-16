import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { TrendingUpRounded } from '@material-ui/icons';
import "./blog.css";

export default function Blog() {
    return (
        <div className="col-12">
            <TopBar />
            <div className="blogHead d-flex justify-content-around">
                <div className="d-flex d-flex justify-content-start flex-column py-5">
                    <p className="heading font-mtsrt">Write to Express</p>
                    <p className="fs-5 font-popins px-4">What you like, know and want to share.</p>
                    <button className="btn mt-5 btn-primary">Start Writing</button>
                </div>
                <div className="d-flex">
                    <img src="https://picsum.photos/250/300" alt="img" />
                </div>
            </div>
            <hr />
            <section className="my-5 px-5">
                <p><TrendingUpRounded /> TRENDING</p>
                <div className="row row-cols-1 row-cols-md-3 g-4 customGrid">
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>01</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">Metaverse</h5>
                                    <p class="card-text">combination of multiple elements of technology, including virtual reality, augmented reality and video where users "live" within a digital universe.</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>02</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">E-Sports</h5>
                                    <p class="card-text">esports are direct competitions between human players, using suitable video and computer games under fixed rules.
</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>03</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">Extended Reality (XR)</h5>
                                    <p class="card-text">might be the Future of Education, Gaming, Entertainment, E-commerce. The scope of application of XR is so much because the X in XR stands for X variable..</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="my-5 px-5">
                <div class="row row-cols-1 row-cols-md-2 g-4 customGrid">
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">BLOCK CHAIN</h6>
                                    <h5 class="card-title">Block Chain Technology- Beyond Cryptocurrencies</h5>
                                    <p class="card-text">increasingly being used by various industries to address issues ranging from day to day operations</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">5G</h6>
                                    <h5 class="card-title">5th generation of broadband technology</h5>
                                    <p class="card-text">5G was rolled out in 2019 by cellular phone companies and the top smart phones and IoT brands have started manufacturing the 5G enabled devices in large scale from 2020.</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">AUTOMATION</h6>
                                    <h5 class="card-title">Self Driven Cars and Drones </h5>
                                    <p class="card-text">Self Driven Cars and Drones enabled by automation logics and algorithms is one of the emerging technologies in 2021. This industry is in its prime stage to boom in 2021 and this entire decade in general.</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">IOT</h6>
                                    <h5 class="card-title">Bluetooth enabled Beacon Technology </h5>
                                    <p class="card-text">Broad range of IoT applications powered by internet as well as Bluetooth Connectivity is opening up new opportunities across various sectors</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
