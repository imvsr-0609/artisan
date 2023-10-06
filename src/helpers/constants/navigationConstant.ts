import { NavigationTab } from "../../types/navigationTypes";
import DashboardIcon from '../../assets/nav-logo/dashboard.svg'
import ChatAgentIcon from '../../assets/nav-logo/chat-agent.svg'
import InboxIcon from '../../assets/nav-logo/inbox.svg'
import CampaignSettingIcon from '../../assets/nav-logo/campaign-setting.svg'
import SalesWorkflowIcon from '../../assets/nav-logo/sales-workflow.svg'
import MailboxIcon from '../../assets/nav-logo/mailbox.svg'
import AnalyticsIcon from '../../assets/nav-logo/analytics.svg'
import IntegrationsIcon from '../../assets/nav-logo/integrations.svg'
import EmailPendingIcon from '../../assets/nav-logo/email-pending.svg'
import LeadsIcon from '../../assets/nav-logo/leads.svg'
import FeedbackIcon from '../../assets/nav-logo/feedback.svg'
import HelpIcon from '../../assets/nav-logo/help.svg'
import AccountSettingIcon from '../../assets/nav-logo/account-setting.svg'


export const navigationTabs:NavigationTab[] = [
    {
        id:0,
        title:'Dashboard',
        icon:DashboardIcon,
    },
    {
        id:1,
        title:'Chat with Agent',
        icon:ChatAgentIcon,
    },
    {
        id:2,
        title:'Inbox',
        icon:InboxIcon,
    },
    {
        id:3,
        title:'Campaign Settings',
        icon:CampaignSettingIcon,
    },
    {
        id:4,
        title:'Sales Workflow',
        icon:SalesWorkflowIcon,
    },
    {
        id:5,
        title:'Mailboxes',
        icon:MailboxIcon,
    },
    {
        id:6,
        title:'Analytics',
        icon:AnalyticsIcon,
    },
    {
        id:7,
        title:'Integrations',
        icon:IntegrationsIcon,
    },
    {
        id:8,
        title:'Emails Pending Approval',
        icon:EmailPendingIcon,
    },
    {
        id:9,
        title:'Leads',
        icon:LeadsIcon,
    },
    {
        id:10,
        title:'Feedback',
        icon:FeedbackIcon,
    },
    {
        id:11,
        title:'Help Center',
        icon:HelpIcon,
    },
    {
        id:12,
        title:'Account Settings',
        icon:AccountSettingIcon,
    },
  
]