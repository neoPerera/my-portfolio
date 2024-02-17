import React from "react";
import { Layout, Typography, List, Card,FloatButton } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const App = () => (
  <Layout>
    <Content style={{ padding: "20px" }}>
      <Card title="Professional Profile">
        <Paragraph>
          Dynamic and results-driven Information Technology professional with
          expertise in cybersecurity, holding a BSc (Hons) in Information
          Technology. Proven ability to overcome challenges in various projects
          using creative problem-solving skills. Experienced in application
          support, C# .NET development, Oracle PL/SQL, and proficient in the MERN
          Stack. My commitment to excellence and a track record of impactful
          projects makes me an asset to any team.
        </Paragraph>
      </Card>

      <Card title="Education">
        <Paragraph>
          BSc (Hons) in Information Technology Specialization: Cyber Security
          Institution: Sri Lanka Institute of Information Technology (SLIIT)
          Year of Completion: 2022
        </Paragraph>
      </Card>
    </Content>
      
    <Footer>
      
    </Footer>
  </Layout>
);

export default App;
