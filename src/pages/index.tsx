import ExperiencesSection from '@/components/ExperiencesSection';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import SocialsContainer from '@/components/SocialsContainer';

export default function HomePage() {
    return (
        <Layout>
            <Header />
            <SkillsSection />
            <ExperiencesSection />
            <ProjectsSection />
            <SocialsContainer />
        </Layout>
    );
}
