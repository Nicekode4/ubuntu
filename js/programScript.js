const speakers = [
    {
        num: 5,
        type: "Desktop",
        speaker: "Chris Smith",
        headline: "Something",
        text: "Something",
        img: "assets\chris_smith.jpg",
        },
        {
            num: 4,
            type: "Desktop",
            speaker: "Dan Jantzen",
            headline: "Ubuntu flavours",
            text: "Ubuntu flavours offer a unique way to experience Ubuntu with different choices of default applications and settings, backed by the full Ubuntu archive for packages and updates.",
            img: "assets\Dan_Jantzen.jpg",
            },
            {
                num: 3,
                type: "Desktop",
                speaker: "Line Dalsgaard",
                headline: "Ubuntu Desktop for the enterprise",
                text: "Ubuntu Advantage is the professional support package from the experts at Canonical. Get 24x7 support with access to engineers with first-hand experience of your issues. It includes Landscape, the systems management tool, for monitoring, managing, patching, and compliance reporting on all your Ubuntu desktops.",
                img: "assets\line_dalsgaard.jpg",
                },
                {
                    num: 2,
                    type: "Desktop",
                    speaker: "Lis Nielsen",
                    headline: "Linux in the wild",
                    text: "Canonical works closely with Dell, Lenovo and HP to certify that Ubuntu works on a wide range of their laptops and workstations. It means that a seamless Ubuntu experience is available out of the box with more hardware choice than ever. And Ubuntu isn’t just for the desktop, it is used in data centres around the world powering every kind of server imaginable and is by far, the most popular operating system in the cloud.",
                    img: "assets\Lis_nielsen.jpg",
                    },
                    {  
                        num: 1,
                        type: "Desktop",
                        speaker: "Sarah Souidan",
                        headline: "Open source",
                        text: "Ubuntu has always been free to download, use and share. We believe in the power of open source software; Ubuntu could not exist without its worldwide community of voluntary developers. So where does opensource go in 2022.",
                        img: "assets\sarah_souidan.jpg",
                        },
                        {  
                            num: 5,
                            type: "Iot",
                            speaker: "Alice Jennings",
                            headline: "the future of robotics",
                            text: "ROS is powering the future of robotics in industry, in the enterprise and for developers. Ubuntu has been the primary platform for ROS from the very beginning, thanks to its flexibility and user-friendliness. ROS is led by Open Robotics, similar to how Canonical supports Ubuntu; Open Robotics steers the ship but it is driven by the community. As the robotics industry grows, companies and developers continue turning to Open Robotics and Canonical to help make their vision a reality.",
                            img: "assets\alice_jennings.jpg",
                            },
                            {  
                                num: 4,
                                type: "Iot",
                                speaker: "Joe Peterson",
                                headline: "container orchestration?",
                                text: "Container orchestration is about managing the lifecycle of containers, particularly in large, dynamic environments. It automates the deployment, networking, scaling, and availability of containerised workloads and services. Running containers - which are lightweight and usually ephemeral by nature - in small numbers, is easy enough to be done manually. However, managing them at scale in production environments can be a significant challenge without the automation that container orchestration platforms offer. Kubernetes has become the standard for container orchestration in the enterprise world.",
                                img: "assets\joe_peterson.jpg",
                                },
                                {  
                                    num: 3,
                                    type: "Iot",
                                    speaker: "Louise Nielsen",
                                    headline: "What is Kubernetes?",
                                    text: "Kubernetes, or k8s for short, is an open source platform pioneered by Google, which started as a simple container orchestration tool but has grown into a cloud native platform. It’s one of the most significant advancements in IT since the public cloud came to being in 2009, and has an unparalleled 5-year 30% growth rate in both market revenue and overall adoption.",
                                    img: "assets\louise_nielsen.jpg",
                                    },
                                    {  
                                        num: 2,
                                        type: "Iot",
                                        speaker: "Mamouhd Hassan",
                                        headline: "OpenStack ensures TCO reduction",
                                        text: "Since more and more organisations are using hybrid multi-cloud architecture, implementing an own cloud is a natural step once the number of workloads grows. Although CapEx costs associated with an initial deployment of the OpenStack are high, its OpEx costs are significantly lower compared to hyperscalers. As a result, the aggregated total cost of ownership (TCO) is lower when running workloads in the long term and at scale. This allows businesses to optimise their cloud maintenance costs and service providers to build an infrastructure competitive to hyperscalers.",
                                        img: "assets\mamouhd_hassan.jpg",
                                        },
                                        {  
                                            num: 1,
                                            type: "Iot",
                                            speaker: "Olav Eriksen",
                                            headline: "What is OpenStack?",
                                            text: "OpenStack is an open-source cloud platform that manages distributed compute, network and storage resources, aggregates them into pools, and allows on-demand provisioning of virtual resources through a self-service portal. OpenStack is a cost-effective extension of the existing public cloud infrastructure, enabling organisations to optimise their cloud maintenance costs and service providers to build an infrastructure competitive to hyperscalers.",
                                            img: "assets\olav_eriksen.jpg",
                                            },
]

function loadEvent() {
    for (let index = 0; index < 6; index++) {
        speakers.forEach(element => {
            if (element.type == "Desktop") {
                if (element.num == index) {
                console.log(element.speaker);
                document.querySelector('#desktop').innerHTML = document.querySelector('#desktop').innerHTML + '<p>' + element.speaker + '</p>'
            }
            }
            else{
                if (element.num == index) {
                    console.log(element.speaker);
                    document.querySelector('#iot').innerHTML = document.querySelector('#iot').innerHTML + '<p>' + element.speaker + '</p>'
                }  
            }
            
        });
        
    }
}
loadEvent()