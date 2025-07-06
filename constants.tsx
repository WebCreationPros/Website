import React from 'react';
import { NavLinkInfo, ServiceInfo, ProcessStepInfo, PackagePlanInfo, SocialLinkInfo } from './types';

// SVG Icon Components (ensure all used icons are defined or imported)
export const BrandComponentsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export const GearIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.111l.281.281c.09.09.224.19.341.292a2.016 2.016 0 012.663 2.663c.004.004.007.007.011.011L12 8l-.281.281c-.09.09-.224.19-.341.292a2.016 2.016 0 01-2.663 2.663c-.004.004-.007.007-.011.011L8 12l.281.281c.09.09.224.19.341.292a2.016 2.016 0 012.663 2.663l.004.004.007.007.011.011L12 16l-.281.281c-.09.09-.224.19-.341.292a2.016 2.016 0 01-2.663 2.663l-.004-.004-.007-.007-.011-.011L8 20l.281.281c.09.09.224.19.341.292a2.016 2.016 0 012.663 2.663l.004.004.007.007.011.011L12 24m4-18c-.09-.542-.56-1.007-1.11-.111l-.281.281c-.09.09-.224.19-.341.292a2.016 2.016 0 00-2.663 2.663c.004.004.007.007.011.011L12 8l.281.281c.09.09.224.19.341.292a2.016 2.016 0 002.663 2.663c.004.004.007.007.011.011L16 12l-.281.281c-.09.09-.224.19-.341.292a2.016 2.016 0 00-2.663 2.663l-.004.004-.007.007-.011.011L16 16l.281.281c.09.09.224.19.341.292a2.016 2.016 0 002.663 2.663l.004-.004.007-.007.011-.011L16 20l-.281.281c-.09.09-.224.19-.341.292a2.016 2.016 0 00-2.663 2.663l-.004.004-.007.007-.011.011L12 24" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5z" />
  </svg>
);

export const BotHeadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h6M9 15h3" />
  </svg>
);

export const ChatBotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 12s4.03 8.25 9 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v.001a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V10.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12.75c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H8.25a.75.75 0 00-.75.75v.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9.753 9.753 0 00-1.768-5.518M3 12a9.753 9.753 0 011.768-5.518" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75h6" />
  </svg>
);

export const SeoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-15.75 0h15.75M3.75 0v.375c0 .621.504 1.125 1.125 1.125h15c.621 0 1.125-.504 1.125-1.125V0M3.75 16.5A.75.75 0 013 15.75V9.75c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75v6c0 .414-.336.75-.75.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 3h3m-7.5 9.75h9.75" />
  </svg>
);

export const WebDevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const GrowthChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export const AppDevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
    </svg>
);

export const ConsultationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.243-3.72a9.094 9.094 0 00-3.741.479m0 0A9.123 9.123 0 0112 21a9.123 9.123 0 01-6.259-2.275m12.518 0A9.094 9.094 0 0012 14.909a9.094 9.094 0 00-6.259 1.103m0 0A9.094 9.094 0 005.259 12a9.094 9.094 0 003.741-2.223M12 12c.03-.09.06-.178.09-.265l1.076-1.076a.75.75 0 10-1.06-1.06l-1.076 1.076a9.14 9.14 0 00-3.11-.7V5.25a.75.75 0 00-1.5 0v.09C4.56 5.503 3 7.07 3 9.75a3 3 0 003 3c.03-.09.06-.178.09-.265l1.076-1.076a.75.75 0 10-1.06-1.06l-1.076 1.076a9.14 9.14 0 00-3.11-.7M12 3c.03.09.06.178.09.265l-1.076 1.076a.75.75 0 101.06 1.06l1.076-1.076a9.14 9.14 0 003.11.7V5.25a.75.75 0 001.5 0v-.09c2.44-.176 4.01-1.742 4.01-4.41a3 3 0 00-3-3z" />
  </svg>
);

export const ProposalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const ArrowsPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const CodeBracketSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export const DeploymentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.375.993L6.25 21.75M9 17.25v-2.812M9 17.25H3.75M9 17.25S5.25 15 5.25 12C5.25 9 7.5 6.75 9 6.75s3.75 2.25 3.75 4.25c0 3-3.75 5.25-3.75 5.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5h-.886c.069-.26.114-.528.14-.797M17.25 19.5h-.886c.069-.26.114-.528.14-.797M14.25 17.25C14.25 14.25 12 12 12 12s-2.25 2.25-2.25 5.25c0 1.28.312 2.484.852 3.475" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5c0-1.28-.312-2.484-.852-3.475L15 12.75M19.5 19.5h-1.5M19.5 19.5c0-1.28-.312-2.484-.852-3.475" />
  </svg>
);

export const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.87v-2.782h2.87V9.79c0-2.828 1.688-4.376 4.26-4.376 1.218 0 2.493.225 2.493.225v2.388h-1.28c-1.382 0-1.812.86-1.812 1.74v2.092h3.19l-.505 2.782h-2.685v7.008C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.905.24 2.508.497.644.27 1.13.614 1.635 1.12.504.504.85 1.003 1.12 1.635.258.603.445 1.338.497 2.508C21.988 8.417 22 8.797 22 12s-.012 3.584-.07 4.85c-.053 1.17-.24 1.905-.497 2.508-.27.644-.614 1.13-.12 1.635-.504.504-1.003.85-1.635 1.12-.603.258-1.338.445-2.508.497-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.905-.24-2.508-.497-.644-.27-1.13-.614-1.635-1.12-.504-.504-.85-1.003-1.12-1.635-.258-.603-.445-1.338-.497-2.508C2.012 15.584 2 15.203 2 12s.012-3.584.07-4.85c.053-1.17.24-1.905.497-2.508.27-.644.614 1.13 1.12-1.635.504-.504 1.003-.85 1.635-1.12.603-.258 1.338-.445 2.508-.497C8.417 2.175 8.797 2.163 12 2.163zm0 1.802c-3.116 0-3.483.01-4.7.067-1.09.05-1.68.222-2.115.39-.46.18-.79.405-1.126.74-.337.336-.562.667-.74 1.125-.168.435-.34 1.025-.39 2.115C2.81 9.517 2.798 9.884 2.798 12s.011 2.483.067 3.7c.05 1.09.222 1.68.39 2.115.18.46.405.79.74 1.126.336.337.667.562 1.125.74.435.168 1.025.34 2.115.39 1.217.056 1.584.067 3.7.067s2.483-.011 3.7-.067c1.09-.05 1.68-.222 2.115-.39.46-.18.79-.405 1.126-.74.337-.336.562.667.74-1.125.168-.435.34 1.025-.39-2.115.056-1.217.067-1.584.067-3.7s-.011-2.483-.067-3.7c-.05-1.09-.222-1.68-.39-2.115-.18-.46-.405-.79-.74-1.126-.336-.337-.667-.562-1.125-.74-.435-.168-1.025-.34-2.115-.39-1.217-.056-1.584-.067-3.7-.067zM12 7.272c-2.613 0-4.728 2.115-4.728 4.728s2.115 4.728 4.728 4.728 4.728-2.115 4.728-4.728S14.613 7.272 12 7.272zm0 7.653c-1.62 0-2.924-1.305-2.924-2.924s1.305-2.924 2.924-2.924 2.924 1.305 2.924 2.924-1.304 2.924-2.924 2.924zm4.805-7.73c-.947 0-1.716-.77-1.716-1.716s.77-1.716 1.716-1.716.716.77.716 1.716-.769 1.716-1.716 1.716z" />
  </svg>
);

export const TiktokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.97-6.46-2.98-1.6-1.98-2.09-4.82-1.58-7.18.52-2.41 2.51-4.45 4.88-5.32 2.37-.86 4.8-.8 7.03-.05.02-1.5-.04-2.99-.01-4.49-.13-1.04-.48-2.04-.9-2.99C12.82.97 12.62.48 12.525.02z"/>
  </svg>
);

export const ThreadsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    fill="currentColor"
    {...props}
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
  </svg>
);





export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// Specific Icons for Packages
export const StarterPlanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const GrowthPlanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

export const PremiumPlanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324h5.388a.563.563 0 01.328.958l-4.201 3.072a.563.563 0 00-.182.557l1.528 5.001a.562.562 0 01-.825.616l-4.331-2.693a.563.563 0 00-.64 0l-4.33 2.694a.562.562 0 01-.826-.617l1.528-5.001a.563.563 0 00-.182-.557l-4.201-3.072a.563.563 0 01.328-.958h5.388a.563.563 0 00.475-.324L11.48 3.5z" />
  </svg>
);

// Data
export const NAV_LINKS: NavLinkInfo[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'process', label: 'Our Process', path: '/process' },
  { id: 'packages', label: 'Packages', path: '/packages' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: ServiceInfo[] = [
   {
    id: 's1', icon: WebDevIcon, title: 'Custom Website Design & Development',
    description: 'Bespoke, responsive websites tailored for performance, accessibility, and visual excellence.', learnMorePath: '/services#s1',
    detailedDescription: ["We go beyond templates to build truly unique digital flagships. Our design process is deeply collaborative, ensuring your vision is translated into a pixel-perfect, responsive website that shines on all devices.","Performance and accessibility are at the core. We build with clean, optimized code for lightning-fast load times and ensure WCAG compliance, making your site usable by everyone. Our modern tech stack allows for scalable and maintainable solutions."],
    keyFeatures: ["User-Centric UI/UX Design","Fully Responsive Across All Devices","Scalable & Future-Proof Architecture","SEO-Optimized Foundation","CMS Integration","Rigorous Quality Assurance"]
  },
  {
    id: 's2', icon: BrandComponentsIcon, title: 'Brand Elements Design',
    description: 'Cohesive brand identity kits: logos, visual systems, social banners & more.', learnMorePath: '/services#s2',
    detailedDescription: ["Your brand is more than just a logo; it's the entire experience you offer. We craft comprehensive brand identities that resonate with your target audience and establish a memorable, impactful presence.","From foundational logo systems, color palettes, and typography strategies to marketing collateral and social media kits, we ensure every brand touchpoint is cohesive and aligned with your core values."],
    keyFeatures: ["Logo Design & Visual Identity Systems","Color Palette & Typography Strategy","Brand Guidelines Documentation","Marketing Collateral Design","Social Media Branding Kits","UI Style Guides"]
  },
  {
    id: 's3', icon: GrowthChartIcon, title: 'Digital Marketing & Consultation',
    description: 'Crafting result-driven strategies to enhance your digital presence and guide your growth.', learnMorePath: '/services#s3',
    detailedDescription: ["Navigating the digital landscape can be complex. Our consultation services provide clarity and direction, helping you make informed decisions to achieve your business objectives.","We develop data-driven digital marketing strategies encompassing SEO, content marketing, social media campaigns, and targeted paid advertising, all tailored to your goals."],
    keyFeatures: ["Digital Strategy Development","SEO Audits & Implementation","Content Marketing Planning","Social Media Management","PPC Campaign Management","Analytics & Performance Reporting"]
  },
  {
    id: 's4', icon: AppDevIcon, title: 'Web & Mobile App Development',
    description: 'Cross-platform, modern apps designed for real-world functionality and sleek UX.', learnMorePath: '/services#s4',
    detailedDescription: ["Transform your innovative ideas into functional, user-friendly web and mobile applications. We specialize in native and cross-platform development, ensuring a seamless experience.","Our agile process emphasizes iterative improvements and cutting-edge technologies to deliver robust, scalable applications that solve real-world problems."],
    keyFeatures: ["Native iOS & Android Development","Cross-Platform Solutions (React Native, Flutter)","Progressive Web Applications (PWAs)","API Development & Integrations","Scalable Backend Solutions","Intuitive UI/UX Design", "Post-Launch Support"]
  },
  {
    id: 's5', icon: ChatBotIcon, title: 'Custom AI Chatbot Development',
    description: 'Smart, conversational bots boosting engagement and automation using latest AI tech.', learnMorePath: '/services#s5',
    detailedDescription: ["Automate customer interactions, provide 24/7 support, and boost engagement with intelligent AI chatbots. We leverage advanced NLP and machine learning to build solutions tailored to your business.","From FAQ bots and lead generation tools to complex virtual assistants, our chatbots are designed to understand user intent and deliver valuable, context-aware responses."],
    keyFeatures: ["Advanced NLP","Integration with GPT, Dialogflow, etc.","Multi-channel Deployment","CRM & Backend Integration","Lead Generation Bots","Performance Analytics & Iteration"]
  },
  {
    id: 's6', icon: SeoIcon, title: 'SEO & Website Optimization',
    description: 'Improve speed, structure, keywords, and visibility — ranking your site where it belongs.', learnMorePath: '/services#s6',
    detailedDescription: ["A great website is invisible if it can't be found. Our SEO services elevate your online visibility, driving organic traffic and connecting you with ideal customers.","We conduct technical audits, keyword research, on-page optimization, quality backlink building, and continuously fine-tune technical SEO for peak performance."],
    keyFeatures: ["Technical SEO Audits","Keyword Research & Analysis","On-Page Content Optimization","Ethical Link Building","Local SEO Optimization","Performance & Core Web Vitals","Regular Reporting"]
  },
];

export const PROCESS_STEPS_DATA: ProcessStepInfo[] = [
  { id: 'p1', icon: ConsultationIcon, title: 'Initial Consultation', description: 'Deep dive into your business, objectives, target audience, and project requirements. We listen, understand, and lay the foundation for success.' },
  { id: 'p2', icon: ProposalIcon, title: 'Proposal & Scope Definition', description: 'A tailored proposal outlining strategic solutions, deliverables, clear timelines, and transparent investment details for your project.' },
  { id: 'p3', icon: ArrowsPathIcon, title: 'Design & Feedback Loop', description: 'Iterative UI/UX design, wireframing, and prototyping. We ensure collaborative feedback for a design that perfectly aligns with your brand and user needs.' },
  { id: 'p4', icon: CodeBracketSquareIcon, title: 'Development & Engineering', description: 'Our expert developers craft clean, efficient, and scalable code, bringing the approved designs to life on web or mobile platforms with modern technologies.' },
  { id: 'p5', icon: DeploymentIcon, title: 'Testing & Deployment', description: 'Rigorous quality assurance, comprehensive testing across devices and browsers, followed by a smooth launch and deployment to your live environment.' },
  { id: 'p6', icon: SupportIcon, title: 'Continued Support & Growth', description: 'Post-launch monitoring, ongoing maintenance, performance tracking, and strategic optimization to ensure sustained success and future growth.' },
];

export const PACKAGES_DATA: PackagePlanInfo[] = [
  {
    id: 'pkg1',
    icon: StarterPlanIcon,
    name: 'Starter Launchpad',
    subtitle: 'Essential digital presence for new ventures & solo entrepreneurs.',
    detailedDescription: [
        "The Starter Launchpad is meticulously designed to establish your new business online swiftly and with a professional edge. It features a custom-designed, sleek single-page website that effectively introduces your brand, outlines your core services, and encourages initial engagement.",
        "To complement your digital presence, we provide a foundational logo design that captures your brand's essence, forming the cornerstone of your visual identity. Essential SEO setup is included to ensure your venture is discoverable by your target audience from the moment you launch. This package is the perfect springboard for those embarking on their digital journey or looking to make a focused impact."
    ],
    features: [
        '1-Page Custom Responsive Website',
        'Basic Logo Design & Brand Starter Kit',
        'Contact Form & Call-to-Action Integration',
        'Mobile-First Design for Optimal Viewing',
        'Google Analytics & Search Console Setup',
        'SEO Essentials (Keywords, Meta Tags, Sitemap)',
        'Domain Connection & Hosting Assistance',
        'Basic Security Setup (SSL advice)',
    ],
    ctaText: 'Explore Starter Plan',
    accentColorClass: 'neon-blue',
    glowColorClass: 'hover:shadow-[0_0_25px_theme(colors.neon-blue/40)]',
  },
  {
    id: 'pkg2',
    icon: GrowthPlanIcon,
    name: 'Growth Engine',
    subtitle: 'Comprehensive solutions for established businesses aiming to scale.',
    detailedDescription: [
        "The Growth Engine package is engineered for established businesses poised to significantly expand their digital footprint and accelerate market growth. This comprehensive offering includes a robust multi-page website (up to 5 thoughtfully designed pages) capable of showcasing diverse content and functionalities, along with a complete professional brand identity kit for unwavering consistency across all online and offline touchpoints.",
        "We empower you with a blog or a user-friendly Content Management System (CMS) for seamless content creation and updates. Your site will undergo rigorous speed and advanced SEO optimization to maximize visibility and user experience. To further enhance engagement, a basic AI-powered chatbot can be integrated for efficient FAQ handling or initial lead generation. This package is strategically designed to attract qualified leads, drive conversions, and support your scaling ambitions."
    ],
    features: [
        'Multi-Page Custom Website (Up to 5 Pages)',
        'Full Professional Brand Identity Kit (Logo, Typography, Color Palette, Guidelines)',
        'Blog/CMS Integration (e.g., WordPress, Strapi)',
        'Advanced SEO & Page Speed Optimization',
        'Content Strategy Consultation & Keyword Mapping',
        'Basic AI Chatbot Integration (FAQ/Lead Capture)',
        'Social Media Profile Integration & Feed Display',
        'Monthly Performance & Analytics Snapshot Report',
        'Enhanced Security Features & Backup Strategy'
    ],
    ctaText: 'Accelerate Growth',
    accentColorClass: 'cyber-purple',
    glowColorClass: 'hover:shadow-[0_0_25px_theme(colors.cyber-purple/40)]',
    isPopular: true,
  },
  {
    id: 'pkg3',
    icon: PremiumPlanIcon,
    name: 'Premium Transformation',
    subtitle: 'Ultimate digital transformation with custom apps & AI automation.',
    detailedDescription: [
        "Our Premium Transformation package delivers an unparalleled, end-to-end digital overhaul for businesses aspiring to achieve market leadership through innovation and advanced automation. This elite offering encompasses a sophisticated, full-featured custom website, coupled with a bespoke web or mobile application tailored to your unique operational needs or customer engagement strategies. The user experience is elevated through advanced interactive animations and captivating microinteractions designed to impress and retain users.",
        "Benefit from an exhaustive SEO audit and a cutting-edge strategy, a custom-trained AI chatbot fully integrated into your ecosystem for superior customer service and operational efficiency, and a meticulously crafted digital marketing strategy. We ensure a seamless transition and sustained performance with three months of dedicated priority support and continuous optimization post-launch. This is the definitive solution for a future-ready digital presence."
    ],
    features: [
        'Full Custom Website + Bespoke Web/Mobile Application',
        'Advanced Interactive Animations & Microinteractions',
        'Full Brand Strategy & Premium Identity Design System',
        'Comprehensive SEO Audit & Advanced Long-Term Strategy',
        'Custom-Trained AI Chatbot with Full CRM/Backend Integration',
        'E-commerce Functionality & Payment Gateway Integration (if applicable)',
        'Detailed Digital Marketing Strategy & Implementation Roadmap',
        '3 Months Priority Support, Maintenance & Optimization Retainer',
        'Advanced Analytics & Conversion Rate Optimization (CRO) Setup'
    ],
    ctaText: 'Achieve Transformation',
    accentColorClass: 'electric-green',
    glowColorClass: 'hover:shadow-[0_0_25px_theme(colors.electric-green/40)]',
  },
];

export const SOCIAL_LINKS_DATA: SocialLinkInfo[] = [
    { id: 'email', icon: MailIcon, url: 'mailto:info@webcreationpros.com', name: 'Email' },
    { id: 'facebook', icon: FacebookIcon, url: 'https://www.facebook.com/webcreationpros', name: 'Facebook'},
    { id: 'instagram', icon: InstagramIcon, url: 'https://instagram.com/webcreationpros', name: 'Instagram' }, 
    { id: 'threads', icon: ThreadsIcon, url: 'https://www.threads.com/@webcreationpros', name: 'Threads' },
    { id: 'tiktok', icon: TiktokIcon, url: 'https://www.tiktok.com/webcreationpros', name: 'TikTok' },
];

export const COMPANY_NAME = "WebCreationPros";
export const TAGLINE = "Launch. Elevate. Dominate.";
export const CONTACT_EMAIL = "info@webcreationpros.com";
