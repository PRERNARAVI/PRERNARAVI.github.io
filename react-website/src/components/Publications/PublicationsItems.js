import React from 'react';
import {Col, Image, Row, Container, Card} from 'react-bootstrap';
import ICERI from "../../Documents/ICERI_1716.pdf";
import ISLS from "../../Documents/Camera_Ready_ISLS.pdf";
import ttig from "../../Documents/ttig-educators.pdf";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import thumbnailDataScience from "../../images/thumbnail_data_science.jpeg";
import thumbnailTTIG from "../../images/ttig_thumbnail.png";
import thumbnailDreams from "../../images/dreams_thumbnail.png";
import thumbnailAppPlanner from "../../images/App_planner_thumbnail.jpg";
import thumbnailRAICA from "../../images/thumbnail_raica.jpg";
import thumbnailLAtScale from "../../images/LAS_23_thumbnail.png";
import thumbnailPandemic from "../../images/thumbnail_pandemic.png";
import thumbnailCopyCat from "../../images/copycat_thumbnail_new.png";
import thumbnailCHI from "../../images/CHI_2025_thumbnail.jpg";
import thumbnailLAtSPractice from "../../images/LAS_practice_thumbnail.png";
import thumbnailIDC from "../../images/IDC_2025_thumbnail.png";
import thumbnailABCDE from "../../images/ABCDE_thumbnail.png";
import thumbnailEAAI25 from "../../images/EAAI_2025_thumbnail.png";
import thumbnailEmoji from "../../images/emoji_thumbnail.png";
import thumbnailRAICAPML from "../../images/RAICA_PML_thumbnail.png";
import thumbnailISLS23 from "../../images/ISLS_2023_thumbnail.png";
import thumbnailRAICAEthical from "../../images/RAICA_ethical_thumbnail.jpg";

const peerReviewedPapers = [
  {
    title: '🏆 Co-designing Large Language Model Tools for Project-Based Learning with K12 Educators',
    authors: [
      { name: 'Prerna Ravi', isMe: true },
      { name: 'John Masla' },
      { name: 'Gisella Kakoti' },
      { name: 'Grace Lin' },
      { name: 'Emma Anderson' },
      { name: 'Matt Taylor' },
      { name: 'Anastasia Ostrowski' },
      { name: 'Cynthia Breazeal' },
      { name: 'Eric Klopfer' },
      { name: 'Hal Abelson' }
    ],
    venue: 'Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025)',
    year: '2025',
    image: thumbnailCHI,
    pdf: 'https://dl.acm.org/doi/pdf/10.1145/3706598.3713971',
    video: 'https://www.youtube.com/watch?v=wG2udrgBw6c&ab_channel=ACMSIGCHI',
    slides: null,
    tags: ['HCI', 'AI', 'Education'],
    award: 'Best Paper Honorable Mention (Top 5%)'
  },
  {
    title: 'Beyond AI Feedback: How Metacognitive Requirements in Practice Exams Transform Student Learning Behaviors',
    authors: [
      { name: 'Mak Ahmad' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'David Karger' },
      { name: 'Marc Facciotti' },
      { name: 'Kwan-Liu Ma' }
    ],
    venue: 'Proceedings of the 12th ACM Conference on Learning @ Scale (L@S 2025)',
    year: '2025',
    image: thumbnailLAtSPractice,
    pdf: 'https://arxiv.org/pdf/2505.13381',
    video: null,
    slides: null,
    tags: ['HCI', 'AI', 'Education']
  },
  {
    title: '"How can we learn and use AI at the same time?": Participatory Design of GenAI with High School Students',
    authors: [
      { name: 'Isabella Pu' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Linh Dinh' },
      { name: 'Chelsea Joe' },
      { name: 'Caitlin Ogoe' },
      { name: 'Zixuan Li' },
      { name: 'Cynthia Breazeal' },
      { name: 'Anastasia Ostrowski' }
    ],
    venue: 'Proceedings of the ACM Interaction Design and Children (IDC 2025)',
    year: '2025',
    image: thumbnailIDC,
    pdf: 'https://arxiv.org/pdf/2506.15525',
    video: null,
    slides: null,
    tags: ['HCI', 'AI', 'Education']
  },
  {
    title: 'ABCDE: An Action-Oriented Framework for Collaborative Activities',
    authors: [
      { name: 'Grace Lin' },
      { name: 'Carúmey Stevens' },
      { name: 'Amalia Toutziaridi' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Emma Anderson' }
    ],
    venue: 'Proceedings of the 19th International Conference of the Learning Sciences (ICLS 2025)',
    year: '2025',
    image: thumbnailABCDE,
    pdf: 'https://repository.isls.org/bitstream/1/11590/1/ICLS2025_2780-2782.pdf',
    video: null,
    slides: null,
    tags: ['Education']
  },
  {
    title: 'Supporting AI Fluency Teaching Through the Development of Assessments for Classroom Use',
    authors: [
      { name: 'John Masla' },
      { name: 'Christina Bosch' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Lydia Guterman' },
      { name: 'Sarah Wharton' },
      { name: 'Mary Cate Gustafson-Quiett' },
      { name: 'Samar Abu Hegly' },
      { name: 'Calvin Macatantan' },
      { name: 'Eric Klopfer' },
      { name: 'Cynthia Breazeal' },
      { name: 'Hal Abelson' }
    ],
    venue: 'Proceedings of the AAAI Conference on Artificial Intelligence (AAAI 2025)',
    year: '2025',
    image: thumbnailEAAI25,
    pdf: 'https://ojs.aaai.org/index.php/AAAI/article/download/35191/37346',
    video: null,
    slides: null,
    tags: ['AI', 'Education']
  },
  {
    title: '"Data comes from the real world": A Constructionist Approach to Mainstreaming K12 Data Science Education',
    authors: [
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Robert Parks' },
      { name: 'John Masla' },
      { name: 'Hal Abelson' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'Proceedings of the ACM Virtual Global Computing Education Conference V.1 (SIGCSE Virtual 2024)',
    year: '2024',
    image: thumbnailDataScience,
    pdf: 'https://drive.google.com/file/d/1NJUi66PJgB4T7SEn_irGUKWr8AOQoyCN/view?usp=drive_link',
    video: 'https://youtu.be/awicncJfxUA',
    slides: null,
    tags: ['Education']
  },
  {
    title: 'A Picture is Worth a Thousand Words: Co-designing Text-to-Image Generation Learning Materials for K-12 with Educators',
    authors: [
      { name: 'Safinah Ali' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Katherine Moore' },
      { name: 'Hal Abelson' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'Proceedings of the AAAI Conference on Artificial Intelligence 2024 (AAAI 2024)',
    year: '2024',
    image: thumbnailTTIG,
    pdf: 'https://ojs.aaai.org/index.php/AAAI/article/view/30373',
    video: 'https://underline.io/lecture/93902-a-picture-is-worth-a-thousand-words-co-designing-text-to-image-generation-learning-materials-for-k-12-with-educators',
    slides: null,
    tags: ['AI', 'Education']
  },
  {
    title: 'Constructing Dreams using Generative AI',
    authors: [
      { name: 'Safinah Ali' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Daniella DiPaola' },
      { name: 'Randi Williams' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'Proceedings of the AAAI Conference on Artificial Intelligence 2024 (AAAI 2024)',
    year: '2024',
    image: thumbnailDreams,
    pdf: 'https://ojs.aaai.org/index.php/AAAI/article/view/30374',
    video: null,
    slides: null,
    tags: ['AI', 'Education']
  },
  {
    title: 'App Planner: Utilizing Generative AI in K-12 Mobile App Development Education',
    authors: [
      { name: 'David Kim' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Randi Williams' },
      { name: 'Daeun Yoo' }
    ],
    venue: 'Proceedings of the ACM Interaction Design and Children (IDC 2024)',
    year: '2024',
    image: thumbnailAppPlanner,
    pdf: 'https://dl.acm.org/doi/abs/10.1145/3628516.3659392',
    video: null,
    slides: null,
    tags: ['HCI', 'AI','Education']
  },
  {
    title: 'Understanding Teacher Perspectives and Experiences after Deployment of AI Literacy Curriculum in Middle-school Classrooms',
    authors: [
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Annalisa J. Broski' },
      { name: 'Glenda Stump' },
      { name: 'Hal Abelson' },
      { name: 'Eric Klopfer' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'International Conference of Education, Research and Innovation (ICERI 2023), IATED 2023',
    year: '2023',
    image: thumbnailRAICA,
    pdf: 'https://arxiv.org/pdf/2312.04839',
    video: null,
    slides: null,
    tags: ['AI', 'Education']
  },
  {
    title: 'The L@St Eight Years: A Review of Papers and Authors at Learning @ Scale',
    authors: [
      { name: 'Alex Duncan' },
      { name: 'Ana Rusch' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'David Joyner' }
    ],
    venue: 'Proceedings of the Tenth ACM Conference on Learning @ Scale, (L@S 2023)',
    year: '2023',
    image: thumbnailLAtScale,
    pdf: 'https://dl.acm.org/doi/pdf/10.1145/3573051.3596192',
    video: null,
    slides: null,
    tags: ['HCI', 'Education']
  },
  {
    title: 'The Pandemic Shift to Remote Learning under Resource Constraints',
    authors: [
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Azra Ismail' },
      { name: 'Neha Kumar' }
    ],
    venue: 'Proceedings of the ACM on Human-Computer Interaction (CSCW 2021)',
    year: '2021',
    image: thumbnailPandemic,
    pdf: 'https://dl.acm.org/doi/pdf/10.1145/3476055',
    video: 'https://youtu.be/FVMyv0ulIAc?si=ZbsCjm9Xhfd9uHGS',
    slides: 'https://docs.google.com/presentation/d/1Ok6TA6GUYc3iHO5mnHr078Y5T__zRCQD_hbIGZYElpo/edit?usp=sharing',
    tags: ['HCI']
  },
  {
    title: '🏆 CopyCat: Using Sign Language Recognition to Help Deaf Children Acquire Language Skills',
    authors: [
      { name: 'Dhruva Bansal' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Matthew So' },
      { name: 'Pranay Agrawal' },
      { name: 'Ishan Chadha' },
      { name: 'Ganesh Murugappan' },
      { name: 'Colby Duke' }
    ],
    venue: 'Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI 2021)',
    year: '2021',
    image: thumbnailCopyCat,
    pdf: 'https://dl.acm.org/doi/pdf/10.1145/3411763.3451523',
    video: 'https://youtu.be/WMFZVcey8FU?si=AtsfngD6aep2uyaH',
    slides: 'https://docs.google.com/presentation/d/1Lt1bJzLIjnNoctLVvcjCjD2LOd3kXpOIRHSIuVFErYg/edit?usp=sharing',
    tags: ['HCI'],
    award: 'ACM CHI Student Research Competition Winner'
  }
];

const shortPapers = [
  {
    title: 'An Art Teacher and AI: Creating Adaptable Curricula for AI Literacy',
    authors: [
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Annalisa J. Broski' },
      { name: 'Glenda Stump' },
      { name: 'Angela Daniel' },
      { name: 'Hal Abelson' },
      { name: 'Eric Klopfer' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'Play Make Learn Conference (PML 2023)',
    year: '2023',
    image: thumbnailRAICAPML,
    pdf: null,
    video: null,
    slides: 'https://docs.google.com/presentation/d/1jKlniZ-1ycB9-Vg4QCmuumsKcaus4DP_YEPgBwupnIk/edit?usp=sharing',
    tags: ['AI', 'Education']
  },
  {
    title: 'Demystifying Text-to-Image Generation for K12 Educators',
    authors: [
      { name: 'Safinah Ali' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Katherine Moore' },
      { name: 'Cynthia Breazeal' },
      { name: 'Hal Abelson' }
    ],
    venue: 'In Workshops and Tutorials: International Society of Learning Sciences (ISLS 2023)',
    year: '2023',
    image: thumbnailISLS23,
    pdf: ISLS,
    video: null,
    slides: 'https://mitmedialab.github.io/genai-isls',
    tags: ['AI', 'Education']
  },
  {
    title: 'Ethical by Design: Teaching Middle-school Students to Think Ethically About AI',
    authors: [
      { name: 'Glenda Stump' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Annalisa J. Broski' },
      { name: 'Angela Daniel' },
      { name: 'Hal Abelson' },
      { name: 'Eric Klopfer' },
      { name: 'Cynthia Breazeal' }
    ],
    venue: 'AI Literacy Workshop at the CHI Conference on Human Factors in Computing Systems (CHI 2023)',
    year: '2023',
    image: thumbnailRAICAEthical,
    pdf: 'https://drive.google.com/file/d/1JwTXsxGomRe-AqC84UodEAE_sEhuzuvC/view',
    video: null,
    slides: null,
    tags: ['AI', 'Education']
  }
];

const journalPapers = [
  {
    title: "#let's-discuss: Analyzing Students' use of Emoji when interacting with course readings",
    authors: [
      { name: 'Ariel Blobstein' },
      { name: 'Marc T. Facciotti' },
      { name: 'Michele Igo' },
      { name: 'David Karger' },
      { name: 'Prerna Ravi', isMe: true },
      { name: 'Kamali Sripathi' },
      { name: 'Kobi Gal' }
    ],
    venue: 'International Journal of Artificial Intelligence in Education (IJAIED 2024)',
    year: '2024',
    image: thumbnailEmoji,
    pdf: 'https://link.springer.com/article/10.1007/s40593-024-00401-5',
    video: null,
    slides: null,
    tags: ['HCI', 'AI', 'Education']
  }
];

// Tag color and emoji map
const tagStyles = {
  'HCI': { color: '#1E88E5', emoji: '🖥️' },
  'AI': { color: '#3949AB', emoji: '🤖' },
  'Education': { color: '#43B0B1', emoji: '🎓' },
};

// Utility function to emphasize venue abbreviations
function emphasizeAbbr(venue) {
  // Match patterns like (CHI 2021), (AAAI 2024), (SIGCSE Virtual 2024), etc.
  // Only emphasize the abbreviation and year inside the parentheses
  return venue.replace(/\(([^)]+)\)/g, (match, inner) => {
    // Split by space to find abbr and year
    // e.g., 'CHI 2021', 'AAAI 2024', 'SIGCSE Virtual 2024'
    // We'll bold the whole inner part
    return `(<span style="color: #3949AB; font-weight: 700; background: #D1D9FF; padding: 2px 6px; border-radius: 4px;">${inner}</span>)`;
  });
}

class PublicationsItems extends React.Component{
    render () {
        return (
            <div responsive="true" style={{paddingTop: "80px", paddingBottom: "80px", paddingRight: "32px", backgroundColor: "#f8fafc", maxWidth: "100%", color: "#2D3436", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>      
                <Container>
                {/* This page features my publications, teaching appointments, talks, service and non-profit work, and selected media coverage. */}
                <br/><br/>
                {/* <h1 style={{color: "#3A1EB6", fontWeight: 700}}>PUBLICATIONS</h1> */}
                <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
                <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Peer Reviewed Conference Papers</h4>
                {/* <div style={{color: "#1E88E5"}}><span style={{color: "#3A1EB6"}}>*</span>Check CV for papers under review</div> */}
                    <br/>
                    <Row xs={1} md={1} className="g-4">
                        {peerReviewedPapers.map((pub, idx) => (
                            <Col key={idx}>
                                <Card style={{ border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)', marginBottom: 24, minHeight: 220, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                                    <Row noGutters="true">
                                        <Col xs={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fd', borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}>
                                            {pub.image ? (
                                                <Image src={pub.image} alt="Paper visual" style={{maxWidth: '90%', maxHeight: '100%', borderRadius: 8}}/>
                                            ) : (
                                                <InsertDriveFileIcon style={{fontSize: 64, color: '#3A1EB6', opacity: 0.3}}/>
                                            )}
                        </Col>
                                        <Col xs={8} style={{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                            <div style={{fontWeight: 700, color: '#2D3436', fontSize: 16, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{pub.title}</div>
                                            {pub.award && (
                                                <div style={{margin: '8px 0 0 0'}}>
                                                    <span style={{
                                                        color: '#B2530D',
                                                        background: '#FFF4E6',
                                                        padding: '4px 10px',
                                                        borderRadius: '6px',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                                                        display: 'inline-block'
                                                    }}>
                                                        {pub.award}
                                                    </span>
                                                </div>
                                            )}
                                            <div style={{margin: '2px 0 0 0', color: '#2D3436', fontSize: 15, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                                {pub.authors.map((a, i) => (
                                                    <span key={a.name} style={a.isMe ? {fontWeight: 700, color: '#3A1EB6', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"} : {fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{a.name}{i < pub.authors.length-1 ? ', ' : ''}</span>
                                                ))}
                            </div>
                                            <div style={{color: '#2D3436', fontSize: 14, margin: '16px 0 8px 0', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}} dangerouslySetInnerHTML={{__html: emphasizeAbbr(pub.venue)}}></div>
                                            <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
                                                {pub.pdf && (
                                                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" aria-label="PDF" title="View PDF">
                                                        <PictureAsPdfIcon style={{color: '#1E88E5', fontSize: 28}}/>
                                                    </a>
                                                )}
                                                {pub.video && (
                                                    <a href={pub.video} target="_blank" rel="noopener noreferrer" aria-label="Video" title="Watch Video">
                                                        <PlayCircleFilledIcon style={{color: '#3A1EB6', fontSize: 28}}/>
                                                    </a>
                                                )}
                                                {pub.slides && (
                                                    <a href={pub.slides} target="_blank" rel="noopener noreferrer" aria-label="Slides" title="View Slides">
                                                        <InsertDriveFileIcon style={{color: '#1E88E5', fontSize: 26}}/>
                                                    </a>
                                                )}
                            </div>
                        </Col>
                    </Row>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 12, marginRight: 8, paddingBottom: 12}}>
                                        {pub.tags && pub.tags.map(tag => (
                                            <span key={tag} style={{background: tagStyles[tag]?.color || '#3A1EB6', color: '#fff', fontWeight: 600, fontSize: 11, borderRadius: 12, padding: '2px 12px', marginLeft: 4, letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 4}}>
                                                <span style={{fontSize: 13, marginRight: 4}}>{tagStyles[tag]?.emoji || ''}</span>{tag}
                                            </span>
                                        ))}
                            </div>
                                </Card>
                        </Col>
                        ))}
                    </Row>
                    <br/>
                    <br/>
                    <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
                    <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Short Papers and Organized Workshops</h4>
                    <br/>
                    <Row xs={1} md={1} className="g-4">
                        {shortPapers.map((pub, idx) => (
                            <Col key={idx}>
                                <Card style={{ border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)', marginBottom: 24, minHeight: 180, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                                    <Row noGutters="true">
                                        <Col xs={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fd', borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}>
                                            {pub.image ? (
                                                <Image src={pub.image} alt="Paper visual" style={{maxWidth: '90%', maxHeight: '100%', borderRadius: 8}}/>
                                            ) : (
                                                <InsertDriveFileIcon style={{fontSize: 56, color: '#3A1EB6', opacity: 0.3}}/>
                                            )}
                        </Col>
                                        <Col xs={8} style={{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                            <div style={{fontWeight: 700, color: '#2D3436', fontSize: 16, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{pub.title}</div>
                                            <div style={{margin: '2px 0 0 0', color: '#2D3436', fontSize: 15, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                                {pub.authors.map((a, i) => (
                                                    <span key={a.name} style={a.isMe ? {fontWeight: 700, color: '#3A1EB6', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"} : {fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{a.name}{i < pub.authors.length-1 ? ', ' : ''}</span>
                                                ))}
                            </div>
                                            <div style={{color: '#2D3436', fontSize: 14, margin: '16px 0 8px 0', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}} dangerouslySetInnerHTML={{__html: emphasizeAbbr(pub.venue)}}></div>
                                            <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
                                                {pub.pdf && (
                                                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" aria-label="PDF" title="View PDF">
                                                        <PictureAsPdfIcon style={{color: '#1E88E5', fontSize: 26}}/>
                                                    </a>
                                                )}
                                                {pub.video && (
                                                    <a href={pub.video} target="_blank" rel="noopener noreferrer" aria-label="Video" title="Watch Video">
                                                        <PlayCircleFilledIcon style={{color: '#3A1EB6', fontSize: 26}}/>
                                                    </a>
                                                )}
                                                {pub.slides && (
                                                    <a href={pub.slides} target="_blank" rel="noopener noreferrer" aria-label="Slides" title="View Slides">
                                                        <InsertDriveFileIcon style={{color: '#1E88E5', fontSize: 24}}/>
                                                    </a>
                                                )}
                            </div>
                        </Col>
                    </Row>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 12, marginRight: 8, paddingBottom: 12}}>
                                        {pub.tags && pub.tags.map(tag => (
                                            <span key={tag} style={{background: tagStyles[tag]?.color || '#3A1EB6', color: '#fff', fontWeight: 600, fontSize: 11, borderRadius: 12, padding: '2px 12px', marginLeft: 4, letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 4}}>
                                                <span style={{fontSize: 13, marginRight: 4}}>{tagStyles[tag]?.emoji || ''}</span>{tag}
                                            </span>
                                        ))}
                            </div>
                                </Card>
                        </Col>
                        ))}
                    </Row>
                    <br/>
                    <div style={{height: "4px", width: "48px", background: "#3A1EB6", borderRadius: "2px", marginBottom: "18px"}}></div>
                    <h4 style={{color: "#3A1EB6", marginBottom: "20px", textAlign: "left", fontWeight: 600, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>Journal Papers</h4>
                    <br/>
                    <Row xs={1} md={1} className="g-4">
                        {journalPapers.map((pub, idx) => (
                            <Col key={idx}>
                                <Card style={{ border: 'none', borderRadius: 16, boxShadow: '0 2px 12px rgba(58,30,182,0.07)', marginBottom: 24, minHeight: 160, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                                    <Row noGutters="true">
                                        <Col xs={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fd', borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}>
                                            {pub.image ? (
                                                <Image src={pub.image} alt="Paper visual" style={{maxWidth: '90%', maxHeight: '100%', borderRadius: 8}}/>
                                            ) : (
                                                <InsertDriveFileIcon style={{fontSize: 48, color: '#3A1EB6', opacity: 0.3}}/>
                                            )}
                        </Col>
                                        <Col xs={8} style={{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                            <div style={{fontWeight: 700, color: '#2D3436', fontSize: 16, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{pub.title}</div>
                                            <div style={{margin: '2px 0 0 0', color: '#2D3436', fontSize: 15, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
                                                {pub.authors.map((a, i) => (
                                                    <span key={a.name} style={a.isMe ? {fontWeight: 700, color: '#3A1EB6', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"} : {fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>{a.name}{i < pub.authors.length-1 ? ', ' : ''}</span>
                                                ))}
                            </div>
                                            <div style={{color: '#2D3436', fontSize: 14, margin: '16px 0 8px 0', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}} dangerouslySetInnerHTML={{__html: emphasizeAbbr(pub.venue)}}></div>
                                            <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
                                                {pub.pdf && (
                                                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" aria-label="PDF" title="View PDF">
                                                        <PictureAsPdfIcon style={{color: '#1E88E5', fontSize: 24}}/>
                                                    </a>
                                                )}
                                                {pub.video && (
                                                    <a href={pub.video} target="_blank" rel="noopener noreferrer" aria-label="Video" title="Watch Video">
                                                        <PlayCircleFilledIcon style={{color: '#3A1EB6', fontSize: 24}}/>
                                                    </a>
                                                )}
                                                {pub.slides && (
                                                    <a href={pub.slides} target="_blank" rel="noopener noreferrer" aria-label="Slides" title="View Slides">
                                                        <InsertDriveFileIcon style={{color: '#1E88E5', fontSize: 22}}/>
                                                    </a>
                                                )}
                            </div>
                        </Col>
                    </Row>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 12, marginRight: 8, paddingBottom: 12}}>
                                        {pub.tags && pub.tags.map(tag => (
                                            <span key={tag} style={{background: tagStyles[tag]?.color || '#3A1EB6', color: '#fff', fontWeight: 600, fontSize: 11, borderRadius: 12, padding: '2px 12px', marginLeft: 4, letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 4}}>
                                                <span style={{fontSize: 13, marginRight: 4}}>{tagStyles[tag]?.emoji || ''}</span>{tag}
                                            </span>
                                        ))}
                            </div>
                                </Card>
                        </Col>
                        ))}
                    </Row>
                    <br/>
                    {/* 
                    <hr style={{backgroundColor: "#1E88E5"}}/>
                    <br/>
                    <h1 style={{color: "#3A1EB6", fontWeight: 700}}>TEACHING</h1>
                    <br/>
                    <div style={{color: "#2D3436"}}>
                        I have designed and led instruction for the following courses and workshops:
                    </div>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            6.S062 / MAS.S10 Generative Artificial Intelligence in K12 Education
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Instructor</b>, Massachusetts Institute of Technology, Fall 2023 <br/>
                            Enrollment: MIT & Harvard graduate and undergraduate students 
                            </div>

                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://mit-cml.github.io/gen-ai-fall-2023.github.io/">course website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Impact and Application of Generative Artificial Intelligence within Education
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Instructor</b>, Massive Open Online Course (MOOC), 2023 
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://iedra.uned.es/courses/course-v1:UNED+ImpactGAI_001+2023/about">MOOC website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            MAS Special Topic, Introduction to Text-to-Image Generation for K-12 Educators
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Instructor</b>, Massachusetts Institute of Technology, Fall 2023 <br/>
                            Enrollment: MIT & Harvard graduate and undergraduate students 
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://image-gen.github.io/">course website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            CS 1331, Object-Oriented Programming in Java
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Head Teaching Assistant</b>, Georgia Tech, 2019-2021 <br/>
                            Enrollment: Georgia Tech undergraduate students 
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Environmental Data Collection and Analysis using Micro:bits
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Curriculum Developer</b>, Day of AI, 2024 <br/>
                            Enrollment: Middle and high school teachers and students 
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://dayofai.org/">curricula website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Data Science and AI with Micro:bits and MIT App Inventor
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Instructor + Curriculum Developer</b>, MIT Futuremakers Program 2024 <br/>
                            Enrollment: Middle and high school students 
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Human Centered Design
                            </div>
                            <div style={{color: "#2D3436"}}>
                            <b style={{color: "#3A1EB6"}}>Instructor</b>, Code.X, 2021 <br/>
                            Enrollment: Code.X Human Centered Design Year 3 Summer Program 
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <hr style={{backgroundColor: "#1E88E5"}}/>
                    <br/>
                    <br/>
                    <h1 style={{color: "#3A1EB6", fontWeight: 700}}>SERVICE AND NON-PROFIT WORK</h1>
                    <br/>
                    <ul>
                        <li>Organizing Committee (Diversity and Inclusion co-chair), <span style={{color: "#1E88E5"}}>ACM UIST 2024</span>
                            <ul>
                                <li style={{color: "#2D3436"}}>
                                Introduced a new category of best paper awards to UIST for those fostering Belonging and Inclusion in the HCI community, organized
                                new diversity initiatives for women and LGBTQ+ participants, spearheaded a panel of women leaders in HCI, and organized travel awards to
                                support historically marginalized groups
                                </li>
                            </ul>
                        </li>
                        <li>Program Committee (Associate Chair), <span style={{color: "#1E88E5"}}>ACM CSCW 2024</span> <span style={{color: "#2D3436"}}>[4 reviews]</span></li>
                        <li>Program Committee (Associate Chair), <span style={{color: "#1E88E5"}}>MIT AI + Education Summit 2024</span> <span style={{color: "#2D3436"}}>[10 reviews]</span></li>
                        <li>Reviewer, <span style={{color: "#1E88E5"}}>ACM CHI 2024, 2025</span> <span style={{color: "#2D3436"}}>[2 reviews]</span> <span style={{color: "#FF69B4"}}>Special Recognition for Outstanding Reviews </span></li>
                        <li>Reviewer, <span style={{color: "#1E88E5"}}>ACM DIS 2023</span> <span style={{color: "#2D3436"}}>[1 review]</span></li>
                        <li>Reviewer, <span style={{color: "#1E88E5"}}>JMIR Applications of AI, 2024</span> <span style={{color: "#2D3436"}}>[1 review]</span></li>
                        <br/>
                        <li>Tech Vetter, <span style={{color: "#2D3436"}}>MIT Solve Global Learning Challenge, 2024</span></li>
                        <li>Editor, <span style={{color: "#2D3436"}}>MIT Work of the Future Substack Newsletter <a style={{color: "#1E88E5", fontWeight: 600}} href="https://substack.com/@mitworkofthefuture">[link]</a></span></li>
                        <li>Workshops and Outreach, <span style={{color: "#2D3436"}}>App Inventor Foundation</span></li>
                        <li>Founder and President, <span style={{color: "#2D3436"}}>UNICEF @ Georgia Tech, 2018-2022</span></li>
                        <li>Executive Project Lead, <span style={{color: "#2D3436"}}>CS + Social Good @ Georgia Tech, 2019-2022</span></li>
                        <li>Training Manager, <span style={{color: "#2D3436"}}>Robogals @ Georgia Tech, 2019-2020</span></li>
                    </ul>
                    <br/>
                    <hr style={{backgroundColor: "#1E88E5"}}/>
                    <br/>
                    <h1 style={{color: "#3A1EB6", fontWeight: 700}}>INVITED TALKS AND PRESENTATIONS</h1>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Democratizing K12 Data Science Education through Student-Centered Interdisciplinary Curricula
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Speaker at <span style={{color: "#FF69B4"}}>UNESCO's Digital Learning Week 2024</span>, held at UNESCO Headquarters, Paris <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            The Future of Generative AI in Higher Education
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Guest speaker at 81st Annual Conference of Louisiana Colleges & Universities (CLCU) 2024 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Generative AI for Responsible Community Engagement
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Guest speaker at Capitol Hill, Washington DC: #HouseOfCode, U.S. Congressional App Challenge <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Social Annotation Systems for Large-Scale Classroom Collaboration and Learning
                            </div>
                            <div style={{color: "#2D3436"}}>
                            MIT CSAIL Alliances Annual Meeting, 2024 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            2024 Future Steminist Convention
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Guest speaker and panelist, sySTEMic flow <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            How Might We Redefine Learning in the Age of AI?
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Center for Constructive Communication (CCC), MIT Media Lab, 2024 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            AI is for Everyone: Transforming K-12 Learning and Education in the Era of AI
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Center of Excellence in Teacher Education (CETE) at Tata Institute of Social Sciences (TISS), Mumbai, India, 2023 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Day of AI India
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Global Partnership on Artificial Intelligence (GPAI) 2023, New Delhi, India, 2023 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            PopSign: Mobile games to Teach Sign Language
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Imagine RIT: Rochester Institute of Technology, 2022 <br/>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.popsign.org/">game website</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Intuitive Calibration and Data Collection Procedures for ASL Recognition using Azure Kinect
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Undergraduate Research Symposium at Georgia Tech, 2019 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Pose Estimation for ASL Recognition using OpenPose and Microsoft Kinect
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Georgia Tech GVU Center Research Showcase, 2019 <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <hr style={{backgroundColor: "#1E88E5"}}/>
                    <br/>
                    <h1 style={{color: "#3A1EB6", fontWeight: 700}}>SELECTED MEDIA COVERAGE</h1>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            MIT Open Learning News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            New Day of AI curricula brings climate change into the AI conversation with K-12 students.
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://openlearning.mit.edu/news/new-day-ai-curricula-brings-climate-change-ai-conversation-k-12-students">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            MIT News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            MIT launches Working Group on Generative AI and the Work of the Future.
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://news.mit.edu/2024/mit-launches-working-group-generative-ai-and-work-of-the-future-0328">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            App Inventor Foundation News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Boston Public School Students Consider AI and Data Science.
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.appinventorfoundation.org/news/boston-public-schools">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            MIT Center for Constructive Communication News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            CCC and DemocracyNext hosted the First-Ever Tech-Enhanced Student Assembly
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.ccc.mit.edu/pressmedia/ccc-and-democracynext-hosted-the-first-ever-tech-enhanced-student-assembly/">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Georgia Tech College of Computing News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            CS Major Earns Adobe Research Women-In-Tech Scholarship
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.cc.gatech.edu/news/645429/cs-major-earns-adobe-research-women-tech-scholarship">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Adobe Research News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Women-in-Technology Scholarship: Sparking Curiosity
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://research.adobe.com/news/adobe-research-women-in-technology-scholarship-sparking-curiosity/">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            App Inventor Foundation News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            High School Girls in Mexico Build App to Track Carbon Footprint
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.appinventorfoundation.org/news/high-school-girls-in-mexico-track-carbon-footprint">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Rochester Institute of Technology (RIT) News
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Parents of deaf children can more easily learn sign language thanks to powerful tech collaboration
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.rit.edu/news/parents-deaf-children-can-more-easily-learn-sign-language-thanks-powerful-tech-collaboration">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Google Research at I/O 2023
                            </div>
                            <div style={{color: "#2D3436"}}>
                            Students x Sign Language Recognition | Google Lab Sessions
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://www.youtube.com/watch?v=WC9x3jp_nV8">video link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col >
                            <div style={{color: "#2D3436"}}>
                            Avanti Fellows Blog
                            </div>
                            <div style={{color: "#2D3436"}}>
                            LedBy Girls' Leadership and Mentorship Program: The Why, What, and How
                            </div>
                            <div style={{color: "#1E88E5"}}>
                            <a style={{color: "#1E88E5", fontWeight: 600}} href="https://blog.avantifellows.org/avanti-fellows-ledby-girls-leadership-and-mentorship-program-the-why-what-and-how-part-1-ef39379824cd">article link</a> <br/>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    */}
                </Container>
            </div>
            
        );
    }
}
export default PublicationsItems;