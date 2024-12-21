import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

import {
    RiGithubFill,
  } from 'react-icons/ri';

const ProjectCard = ({ project }) => {
  return (    
    <Card className='group overflow-hidden relative'>
        <CardHeader className='p-0 m-0'>
            <div className='relative w-full h-[240px] bg-cover bg-center'>
                <Image 
                    className='w-full h-full object-cover' 
                    src={project.image}
                    width={400}
                    height={240}
                    alt={project.name}
                    priority
                    quality={100}
                    style={{ display: 'block' }} // Removes any default inline spacing
                />
                <div className='absolute inset-0 flex items-center justify-center gap-x-4 opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <Link href={project.link} className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                        <Link2Icon className='text-white' />
                    </Link>
                    <Link href={project.github} className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                        <RiGithubFill className='text-white' />
                    </Link>
                </div>
            </div>
        </CardHeader>
        <div className='h-full px-8 py-6'>
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                {project.category}
            </Badge>
            <h4 className='h4 mb-1'>{project.name}</h4>
            <p className='text-muted-foreground text-lg'>{project.description}</p>
        </div>
    </Card>
  ); 
};

export default ProjectCard;