import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Mainbodycontainer, Myemailcontainer, Toolscontainer, SkillBox, SkillBoxTrans, SkillText, SkillTextBlack, SkillHeadText, PText, Projectname, PDiv } from '../styles/Workstyle'
import Image from 'next/image'
import javaLogo from '../icons/logos/javaLogo.png'
import pythonLogo from '../icons/logos/pythonLogo.png'
import mysqlLogo from "../icons/logos/sqlLogo.png"
import nextjsLogo from '../icons/logos/nextjsLogo.png'
import hibernateLogo from '../icons/logos/hibernateLogo.png'
import githubLogo from '../icons/logos/githubLogo.png'
import gitLogo from '../icons/logos/gitLogo.png'
import htmlLogo from '../icons/logos/htmlLogo.png'
import cssLogo from '../icons/logos/cssLogo.png'
import javascriptLogo from '../icons/logos/javascriptLogo.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools I Use</title>
        <meta name="description" content="Projects and Tools I use" />
        <link rel="icon" href="/mypic1.jpg" />
      </Head>

      <Mainbodycontainer>
        <Myemailcontainer>
          <span >Matyila2sango@gmail.com</span>
        </Myemailcontainer>

        <Toolscontainer>
          <SkillHeadText><h2>My Projects</h2></SkillHeadText><br />
          <PDiv>
            <Projectname>Library System</Projectname>
            <Projectname>Media player</Projectname>
            <Projectname>Tutoring<br /> web<br /> application</Projectname>
            <Projectname>Music site</Projectname>
          </PDiv><br/><br />
          <SkillHeadText><h2>Skills</h2></SkillHeadText><br />
          <PText>The technologies that I use are as follows!</PText><br/><br />
          <SkillBox className={styles.SkillBox}>
            <Image src={javaLogo} alt='pic'></Image>
            <SkillText>Java</SkillText>
          </SkillBox>
          <SkillBox className={styles.SkillBox}>
            <Image src={pythonLogo} alt='pic'></Image>
            <SkillText>Python</SkillText>
          </SkillBox>
          <SkillBox className={styles.SkillBox}>
            <Image src={mysqlLogo} alt='pic'></Image>
            <SkillText>MySQL</SkillText>
          </SkillBox>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={nextjsLogo} alt='pic'></Image>
            <SkillTextBlack>Next.JS</SkillTextBlack>
          </SkillBoxTrans>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={hibernateLogo} alt='pic'></Image>
            <SkillTextBlack>Hibernate</SkillTextBlack>
          </SkillBoxTrans>
          <SkillBox className={styles.SkillBox}>
            <Image src={gitLogo} alt='pic'></Image>
            <SkillText>Git</SkillText>
          </SkillBox>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={githubLogo} alt='pic'></Image>
            <SkillTextBlack>GitHub</SkillTextBlack>
          </SkillBoxTrans>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={htmlLogo} alt='pic'></Image>
            <SkillTextBlack>HTML</SkillTextBlack>
          </SkillBoxTrans>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={cssLogo} alt='pic'></Image>
            <SkillTextBlack>CSS</SkillTextBlack>
          </SkillBoxTrans>
          <SkillBoxTrans className={styles.SkillBox}>
            <Image src={javascriptLogo} alt='pic'></Image>
            <SkillTextBlack>JavaScript</SkillTextBlack>
          </SkillBoxTrans>

        </Toolscontainer>
        
      </Mainbodycontainer>
      
    </div>
  )
}