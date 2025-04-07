import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as ReactNativeIcon } from '../../assets/icons/react-native.svg';
import { ReactComponent as CsharpIcon } from '../../assets/icons/csharp.svg';
import { ReactComponent as JavascriptIcon } from '../../assets/icons/javascript.svg';
import { ReactComponent as TypescriptIcon } from '../../assets/icons/typescript.svg';
import { ReactComponent as NodejsIcon } from '../../assets/icons/nodejs.svg';
import { ReactComponent as ASPNETIcon } from '../../assets/icons/aspnet.svg';
import { ReactComponent as MongodbIcon } from '../../assets/icons/mongodb.svg';
import { ReactComponent as SqlserverIcon } from '../../assets/icons/sql.svg';
import { ReactComponent as GitIcon } from '../../assets/icons/git.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as GitlabIcon } from '../../assets/icons/gitlab.svg';
import { ReactComponent as SourceTreeIcon } from '../../assets/icons/sourcetree.svg';
import { ReactComponent as FigmaIcon } from '../../assets/icons/figma.svg';
import { ReactComponent as PostmanIcon } from '../../assets/icons/postman.svg';
import { ReactComponent as ExcellIcon } from '../../assets/icons/excel.svg';
import { ReactComponent as PowerPointIcon } from '../../assets/icons/powerpoint.svg';
import { ReactComponent as WordIcon } from '../../assets/icons/word.svg';
import dayjs from 'dayjs';

//link icon nè: https://iconduck.com/icons
// Expert: Chuyên gia
// Advanced: Nâng cao
// Intermediate: Trung cấp
// Beginner: Mới bắt đầu

const coreTechs = [
    {
        name: 'React JS',
        icon: <ReactIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-04-01'),
        experience: 'Advanced'
    },
    {
        name: 'React Native',
        icon: <ReactNativeIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'C#',
        icon: <CsharpIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'JavaScript',
        icon: <JavascriptIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-06-01'),
        experience: 'Advanced'
    },
    {
        name: 'TypeScript',
        icon: <TypescriptIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-03-01'),
        experience: 'Advanced'
    },
];

const beAndDatabases = [
    {
        name: 'Node.js',
        icon: <NodejsIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'ASP.NET Core Web API',
        icon: <ASPNETIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'MongoDB',
        icon: <MongodbIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'SQL Server',
        icon: <SqlserverIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
];

const tools = [
    {
        name: 'Git',
        icon: <GitIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitHub',
        icon: <GithubIcon style={{ width: '40px', height: '40px', stroke: 'white' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitLab',
        icon: <GitlabIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'SourceTree',
        icon: <SourceTreeIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Figma',
        icon: <FigmaIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Beginner'
    },
    {
        name: 'Postman',
        icon: <PostmanIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Word',
        icon: <WordIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'Excel',
        icon: <ExcellIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'PowerPoint',
        icon: <PowerPointIcon style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
];

export { coreTechs, beAndDatabases, tools }

