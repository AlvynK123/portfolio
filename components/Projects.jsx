'use client';

import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/vip.png',
        category: 'AI/ML', 
        name: 'Accelerating Material Science with AI',
        description: 'Fine-tuning LLMs to accelerate the generation of crystal structures',
        link: 'https://vip.gatech.edu/teams/vxp',
        github: 'https://vip.gatech.edu/teams/vxp'
    }, 
    {
        image: '/work/magnidia.png',
        category: 'Web Dev', 
        name: 'Magnidia',
        description: 'Event management platform to help users organize and manage events seamlessly',
        link: 'https://www.magnidia.com/',
        github: 'https://github.com/Magnidia/magnidia'
    }, 
    {
        image: '/work/wrap.png',
        category: 'Web Dev', 
        name: 'Wrappify',
        description: 'Platform for personalized music analytics inspired by Spotify Wrapped',
        link: 'https://sites.google.com/view/wrappify/home',
        github: 'https://github.com/SpotifyWrapped/Wrappify'
    }, 
    {
        image: '/work/plates.png',
        category: 'Web Dev', 
        name: 'Atlanta Plates',
        description: 'Web application for discovering restaurants based on location',
        link: 'https://sites.google.com/view/atlantaplates/home',
        github: 'https://github.com/AlvynK123/atlfoodfinder'
    }, 
    {
        image: '/work/planet.png',
        category: 'AI/ML', 
        name: 'Planet Hunters',
        description: 'Leveraging machine learning on datasets from NASAs Exoplanet Archive',
        link: 'https://docs.google.com/presentation/d/1V0QxvSoPiZloRqImZCpeXUYuVYFRWfyl0_ocEukvDW8/edit?usp=sharing',
        github: 'https://github.com/AlvynK123/PlanetHunters'
    }, 
];

const uniqueCategories = [
    'all projects', 
    ...new Set(projectData.map((item) => item.category))
];


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter(project => {
        //filter if not all projects
        return category === 'all projects' ? project : project.category === category;
    });


    return (
        <section className = 'xl:h-[860px] pb-12 xl:py-24'>
            <div className = 'container mx-auto'>
                <h2 className = 'section-title mb-8 xl:mb-16 text-center mx-auto'> Latest Projects</h2>
                <Tabs defaultValue={category}>
                    <TabsList className='w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger 
                                onClick={()=> setCategory(category)}
                                    value={category} 
                                    key={index} 
                                    className='capitalize w-[162px] md:w-auto'
                                >
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project, index)=> {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>                                
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
      );
    };

export default Projects;