---
title: Securing Amazon Web Services
date: '2015-12-14T00:00:00.000Z'
template: post
draft: false
slug: /posts/securing-amazon-web-services
category: AWS
tags:
- Security
- Jay Schulman
description: Discover a comprehensive guide to securing your Amazon Web Services environment.
  This blog post compiles essential tips and resources to protect AWS accounts, EC2
  instances, S3 buckets, and more.
---
Welcome to the complete guide to securing Amazon Web Services. As I was researching how to secure my AWS resources, I realized there isn’t a one-stop guide for securing every piece of AWS. I’ve compiled from around the web (including great resources from Amazon, Evident.io, and others) to build this guide.

This guide will be updated as new services arise, configuration changes occur, or other things happen that require an update to the guide.

This is version **v0.1**, initial release.

The guide was last updated: **December, 2015.**

The guide is organizated by AWS Service. There are tips for each service. Some tips are well described (because it’s easy to describe with words) while others require you to do a little digging. Please send any updates or suggestions to aws@jayschulman.com.

**Note: **This is how you secure Amazon Web Services. Not all security is handled by AWS, so please think about all of the security you need to apply when securing your environment.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **Securing the AWS Account**

The AWS account is the key to the castle. If you’re a casual user, it’s probably your Amazon.com login. The same one you use to buy everything else in your life. If you’re a corporate user, it’s likely a purpose built account. Either way, these suggestions apply.

#### **Disable root API Access Key and Secret Key**

In AWS, a *root* user is the login credential you used to create your AWS account with. While it would seem logical that this user is required to run your applications and infrastructure, it isn’t.

You should disable the AWS root API access keys that go with that account. Go to the Security Credentials page signed in as the root user. Remove or disable any access keys you find.

#### **Create a backup Root user**

You want a limited number of root users, but you should definitely create a backup administrative user should you need it. In the same section as above, create your second administrative user.

#### **Enable Billing and Recovery**

While still logged in as the root user, go to My Account and fill in the following sections: Alternate Contacts; Security Challenge Questions; and IAM User Access to Billing Information. This will be critically important should you need to reset your account.

#### **Setup Multifactor Authentication (MFA)**

You can get started in two simple steps:

- Assign an MFA device to your IAM users. You can get [**AWS Virtual MFA**](https://www.google.com/url?q=http://aws.amazon.com/mfa/virtual_mfa_applications/&amp;sa=D&amp;usg=AFQjCNHqIJpLJcyUAUrfpkA8cggX7tw9nw) for free, which enables you to use any OATH [**TOTP**](https://www.google.com/url?q=http://tools.ietf.org/html/rfc6238&amp;sa=D&amp;usg=AFQjCNGPgXjz8mSS7XdHwkbtC_tVWPZa_A)-compatible application (Google Authenticator, Authy, Duo) on your smartphone. Alternatively, you can purchase a [**hardware MFA key fob**](https://www.google.com/url?q=http://onlinenoram.gemalto.com/&amp;sa=D&amp;usg=AFQjCNGViuhajwgWEktQOi-JX3C9TAyt4A) from Gemalto, Amazon’s third-party provider.
- Add an MFA-authentication requirement to an IAM access policy. You can attach these access policies to IAM users, IAM groups, or resources that support Access Control Lists (ACLs): Amazon S3 buckets, SQS queues, and SNS topics.

The policy below is a basic example of how to enforce MFA authentication on users attempting to call the Amazon EC2 API. Specifically, it grants access only if the user authenticated with MFA within the last 300 seconds.{
  "Statement":[{
      "Action":["ec2:*"],
      "Effect":"Allow",
      "Resource":["*"],
      "Condition":{
         "NumericLessThan":{"aws = MultiFactorAuthAge":"300"}
      }
    }
  ]
 }

This policy utilizes the condition key, **aws = MultiFactorAuthAge**, whose value indicates the number of seconds since MFA authentication. If the condition “matches”, i.e. the value of **aws = MultiFactorAuthAge** is less than 300 seconds at the time of the API call, then access is granted. More information from Amazon is available here:

[http://blogs.aws.amazon.com/security/post/Tx3NJXSBQUB4QMH/Securing-access-to-AWS-using-MFA-Part-2](https://www.google.com/url?q=http://blogs.aws.amazon.com/security/post/Tx3NJXSBQUB4QMH/Securing-access-to-AWS-using-MFA-Part-2&amp;sa=D&amp;usg=AFQjCNE-K-Q7AoCwmz8dmRooas9SOxeUcw)

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **Amazon S3 Security**

**Amazon S3 **(Simple Storage Service) is an online file storage web service. Lots of different things gets stored in S3 on Amazon. Not just file respositories that you setup. Everything in this section refers to a *bucket*. Buckets are the storage unit (or maybe you’d call it a volume or file directory) that Amazon uses.

#### **Bucket Policies**

There are two ways to control access to an S3 bucket — via the IAM policies or using Bucket Policies. For buckets where I’m just providing documents to the outside world, bucket policies work. Where a bucket has logs, private information, etc, IAM policies are how I choose to secure them. You can try it out using the [AWS Policy Generator](https://www.google.com/url?q=http://awspolicygen.s3.amazonaws.com/policygen.html&amp;sa=D&amp;usg=AFQjCNE3kpVFJPOYoBrbamdMI2zCbVtPvA) to create an AWS S3 Policy to secure your bucket. For bucket policies, refer to Amazon’s guide [Using Bucket Policies](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucketPolicies.html&amp;sa=D&amp;usg=AFQjCNHBse4n-EJlDyX1l28TOjWcachkRQ). Bucket Policies **can be used in conjunction with IAM Policies**.

No matter which direction you choose, make sure only the right people have access to the right buckets (i.e. your data). Wait, there is one more way…

#### **Access Control List**

We can also manage access to buckets and objects using ACLs that defines which account (or S3 group) can access a resource and how. Default behavior is to grant the creator/owner full control over the bucket. Policies are written in [XML ](https://www.google.com/url?q=http://en.wikipedia.org/wiki/XML&amp;sa=D&amp;usg=AFQjCNGV5RQS4xavNltfFl-PuxeAPfhzSg)and contains Owner and Grant elements. A list of possible grantees and permissions (with examples) is available in the [S3 Access Control List overview](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/ACLOverview.html&amp;sa=D&amp;usg=AFQjCNFPqW1Li0hYDz2cTKv_9r73bTXv1w).

**ACLS and Bucket Policies can be used together**, S3 will evaluate both when determining an account’s access permissions to an S3 resource.

Final word of warning… it doesn’t really matter what you do as long as it protects your data. Choose the method that works for your management technique, security profile, and easy of use.

#### **Query String Authentication**

If you have content that you’d like to *kinda *protect, Query String Authentication is right for you. This is generally used when you want to use an S3 bucket as a download repository for files. If people have to register on your website before they can download, QSAs are used to make sure you’re clicking the download link from your site. Is it secure? No. Does it keep mischief away? Definitely. Remember, you’re paying for bandwith, so if you put up a huge file and thousands of users download it, you’re paying. You configure this by adding a signature and an expiration date to the query string. This string will be valid until the expiration date.

#### **Distributing S3 contents with CloudFront**

To deliver content from an S3 bucket to the Internet you use CloudFront. If you want to deliver **private content** you need to use** Origin Access Identity. OAI** allows you to restrict access to content while distributing them with CloudFront.

To setup OAI, you need to create an Origin Access Identity for the desired AWS account before you attach it to your CloudFront distribution. After giving that identity the read/read and download permissions you remove the public access policy from the S3 bucket and the content will be available only from CloudFront. Additionally to add a little more security, you can add trusted signer accounts to the distribution configuration to allow access to the Private content only using Signed URLs.

#### **MFA Delete**

You can optionally add another layer of security by configuring a bucket to enable MFA (Multi-Factor Authentication) Delete, which requires additional authentication for either of the following operations.

- Change the versioning state of your bucket
- Permanently delete an object version

I would only recommend MFA Delete when the data stored in an S3 bucket is required by regulations (logs, transaction activity, etc) or irreplaceable (images, videos, etc). The idea is that you need to use your two-factor token to delete any objects. MFA Delete requires two forms of authentication together:

- Your security credentials
- The concatenation of a valid serial number, a space, and the six-digit code displayed on an approved authentication device

MFA Delete provides added security in the event your security credentials are compromised or a script goes haywire.

To enable or disable MFA delete, you make an API call. Amazon S3 stores the MFA Delete configuration in the same versioning subresource that stores the bucket’s versioning status.<VersioningConfiguration xmlns="[http://s3.amazonaws.com/doc/2006-03-01/](https://www.google.com/url?q=http://s3.amazonaws.com/doc/2006-03-01/&amp;sa=D&amp;usg=AFQjCNH3YwDu3jTgIbVevMt4c9KqxuTaeA)"> 
  <Status>*VersioningState*</Status>
  <MfaDelete>*MfaDeleteState*</MfaDelete>  
 </VersioningConfiguration>

#### **Amazon EC2 Security**

Amazon Elastic Compute Cloud (**Amazon EC2**) provides scalable computing capacity. A typical EC2 instance runs Linux or Windows. When people refer to *Infrastructure as a Service (IaaS)* they are typically referring to EC2.

In EC2, the image that runs on the virtual machine is referred to as an Amazon Machine Image or AMI. You can create your own, use Amazon’s default images or download an image from the marketplace. The following are some basic settings you should apply to all AMIs which you use or publish. Additionally, AMIs should be secured the same as any other operating system you’d secure.

In my configuration references, I’m assuming you know how to do each task. I haven’t put the step by step guide to each task in here.

The references below are for two specific instances — 1) you’re using someone else’s AMI (versus the standard Amazon AMIs) or 2) you’re creating your own AMI to use. Amazon’s AMIs by default should contain all of the recommendations below unless you’ve specifically changed something.

#### **Securing Linux AMIs**

- Configure sshd to allow only public key authentication. Set **PubkeyAuthentication **to** Yes** and **PasswordAuthentication** to **No** in **sshd_config**.
- Generate a unique SSH host key on instance creation. If the AMI uses **cloud-init**, it will handle this automatically.
- Remove and disable passwords for all user accounts so that they cannot be used to log in and do not have a default password. Run **passwd -l <USERNAME>** for each account.
- Securely delete all user SSH public and private key pairs.
- Securely delete all shell history and system log files containing sensitive data.

#### Securing Windows AMIs

- Ensure that all enabled user accounts have new randomly generated passwords upon instance creation. You can configure the EC2 Config Service to do this for the Administrator account upon boot, but you must explicitly do so before bundling the image.
- Ensure that the Guest account is disabled.
- Clear the Windows event logs.
- Make sure the AMI is not a part of a Windows domain.
- Do not enable any file sharing, print spooler, RPC, and other Windows services that are not essential but are enabled by default.

#### **Unused EC2 Security Groups**

Keeping your EC2 security groups clean eliminates the risk that an unauthorized security group policy will be used by mistake to open attack surface. If you’re just getting started, you may have started an EC2 instance using an insecure security group.

1. Remove all unnecessary or unused security groups.
2. Make sure your secure groups are properly documented. For example, I have a security group called “Web” which has ports 22 (SSH), 80 (HTTP) and 443 (HTTPS) open. I also have a security group called “PBX” which has the default ports for my Voice over IP software to communicate.
3. Make sure only the minimum necessary ports are open in your security groups.

#### **Non Public Security Groups**

If you’re running services that should not be accessed by the internet, restrict them to known IP blocks or specific addresses. I’m not going to get into a discussion of network architecture (i.e. I’m thinking you should use a jump host and/or VPN).

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **Amazon RDS Security**

Amazon Relational Database Service (or **Amazon RDS**) is a distributed relational database service. RDS supports a variety of databases such as MySql, Oracle, and Microsoft SQL

#### **Securing Access to the Database**

Access to the RDS database should be restricted to the application that needs to access the database. In most cases, this is probably going to be an EC2 instance. Be extremely careful when adding additional IP addresses as they will have access to RDS (although a username and password is still required). This is all done through a Security Group much the same as an EC2 Security Group.

#### **Encrypting the Database**

To enable encryption for a new DB instance, select `Yes` in the Enable encryption dropdown in the Amazon RDS console.

If you use the [rds-create-db-instance](http://docs.aws.amazon.com/AmazonRDS/latest/CommandLineReference/CLIReference-cmd-CreateDBInstance.html) CLI command to create an encrypted RDS DB instance, set the `--storage-encrypted` parameter to true. If you use the [CreateDBInstance](http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) API action, set the `StorageEncrypted` parameter to true.

There are restrictions on database types and sizes for you to use database encryption. For more information, see: [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html)

#### **Protecting Data at Rest on Amazon RDS**

The database itself can be encrypted by following the above recommendations. Should you be using a database size that doesn’t support encryption, the following are some simple recommendations.

You could add protection at the application layer, for example, using a built-in encryption function that encrypts all sensitive database fields, using an application key, before storing them in the database.

You could add protection at the platform using MySQL cryptographic functions; which can take the form of a statement like the following = INSERT INTO Customers (CustomerFirstName,CustomerLastName) VALUES (AES_ENCRYPT('Jay',@key), AES_ENCRYPT('Schulman',@key);

This is barely advice on encryption. That’s because if done wrong, things generally go horribly wrong.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **AWS CloudTrail**

CloudTrail provides increased visibility into activity in your AWS account by recording information about AWS API calls made on the account. You can use these logs to determine, for example, what actions a particular user has taken during a specified time period or which users have taken actions on a particular resource during a specified time period. Because CloudTrail delivers log files to an Amazon Simple Storage Service (Amazon S3) bucket, CloudTrail must have write permissions for the bucket.

#### **Protect the API**

If you go through all the steps to enable CloudTrail and consume it, you don’t want it to just disappear one day without any explanation. A critical part of your security strategy in AWS is securing the API. In order to best protect the API, we need to apply stringent IAM policies to limit the scope of access available to who can access it, as well as limit the actions they can take over the API. A smart AWS attacker would know to look for CloudTrail logging and attempt to disable it. Remove access to the CloudTrail API from all users except administrators. Additionally, for highly secure environments, the API should also be protected with Multi-Factor Authentication (see the section above on MFA Delete and the process is very similar). Generally though, once CloudTail is setup, it needs almost no maintenance.

#### **Protect the CloudTrail S3 Bucket**

IIf you can’t turn off CloudTrail, the next step an attacker would take is to delete the logs. The logs are stored in S3.

1. Make sure you attach a [restrictive bucket policy](https://www.google.com/url?q=http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_bucket_policy.html&amp;sa=D&amp;usg=AFQjCNEubrj2JJ_fRz-30m7DDRZcnVRmzw) to the CloudTrails S3 Bucket. We recommend allowing the CloudTrail service to write (but not read/edit) the logs, and allowing for CloudTrail logs to be read (read-only) from the bucket by specific services or individuals.
2. [Enable MFA-Delete on this bucket](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html&amp;sa=D&amp;usg=AFQjCNFR2k7Mnq1XEjjTDKgHFMVtddvp6Q). This could have been the specific example I used on when to setup MFA Delete.
3. [Enable SSE on the bucket immediately](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html&amp;sa=D&amp;usg=AFQjCNFiv_ToneNxKSEEqM0qro6OUGPmCA). Encryption-at-rest is a valuable tool to ensure nobody is snooping on your data while it is stored. You can either use the [AWS Managed Keys](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html&amp;sa=D&amp;usg=AFQjCNE74expGi3zfIDS4qIULOOk5UcooQ) or [new Key Management Service with your own keys.](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html&amp;sa=D&amp;usg=AFQjCNF55nWlwRRSm9kR6bjAW-QZWEmzFQ)
4. [Enable SNS notifications of CloudTrail log delivery](https://www.google.com/url?q=http://docs.aws.amazon.com/awscloudtrail/latest/userguide/getting_notifications_top_level.html&amp;sa=D&amp;usg=AFQjCNGiGM8IgHO6MsanBd7_tk3PYJAZ8g): once the log is delivered, make sure you trigger an action to import the log into an external tool such as Splunk. By picking up the log nearly immediately, you close the window of opportunity for an attacker to manipulate the logfile.
5. [Consider archiving historical logs off to Glacier](https://www.google.com/url?q=http://docs.aws.amazon.com/AmazonS3/latest/dev/object-archival.html&amp;sa=D&amp;usg=AFQjCNEuZ1MDZ-nRwVWG5M24r8NiVzJfOQ). Glacier is offline storage so anything that is beyond the typical date that you would regularly look at, you can send here.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **AWS CloudWatch**

While right in line with CloudTrail, CloudWatch is a series of alerts you can create to notify you of events within your AWS infrastructure. At the very least, I set an alert for billing. If someone were to get access to your account, they can ring up a large bill. I set two billing alerts, one for the average amount of my monthly bill and one for 10 to 20% higher than that amount. That way I’ll see if things start spinning up on my account pretty quickly.

I track a few other things too that I think are signs something may be suspicious. For example, I track the number of connections to my RDS instance. I’ve trended over time the average number of connections and I pick a variable that is high enough that I’d want to look to see what is happening.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **AWS EBS**

Amazon Elastic Block Store (Amazon EBS) provides persistent block level storage volumes for use with Amazon EC2 instances in the AWS Cloud. Think of EBS as the virtual harddrives in your EC2 instances.

#### **Use EBS volume encryption**

EBS volume encryption uses AES-256 and is a convenient mechanism for meeting data-at-rest encryption compliance mandates. An unencrypted EBS volume cannot be converted to an encrypted volume after creation. It is a setting that must be applied on creation of an EBS volume.

#### **Snapshot your instances**

Snapshots are a low cost way to recover EBS volumes and they can be made while a system is online. If you’re ever in a situation when you want to capture the current state of the instance (i.e. you think you’ve had a breach or other malicious activity), create a snapshot. The snapshot can be used for recovery or for forensic examination later.

#### **Amazon Route 53**

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service.

#### **Limit Access to Route 53**

Route 53 is your DNS records. If someone were to get access to your account, they could re-route traffic by changing your DNS records. Make sure only a limited set of users has access to your Route 53 records.

#### **MX and SPF Resource Record Sets**

Make sure each domain has an appropriate MX and SPF record. Even if you’re not sending e-mail from the domain, an SPF (sender policy framework) record publishes a list of servers that are authorized to send email for your domain, which helps reduce spam by detecting and stopping email address spoofing.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **ELB Security**

Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple Amazon EC2 instances. It enables you to achieve greater levels of fault tolerance in your applications, seamlessly providing the required amount of load balancing capacity needed to distribute application traffic.

#### **ELB Listener Security**

Use HTTPS. When you use HTTPS for a front-end connection (client to load balancer), the requests are encrypted between your clients and the load balancer. Elastic Load Balancing provides predefined security policies with ciphers and protocols that adhere to AWS security best practices. New versions of predefined policies are released as new configurations become available.

#### **ELB Security Groups**

Just the same with other security groups above, make sure the security groups for the ELB match the services you’re load balancing. Typically they would be for HTTP and HTTPS.

#### **Unused or unmaintained ELB Security Groups**

Keeping your ELB security groups clean eliminates the risk that an unauthorized security group policy will be used by mistake. As with all other AWS security groups, properly document the ones you use and delete any that are no longer needed.

#### **CloudFront Security**

Amazon CloudFront is a content delivery web service. It integrates with other Amazon Web Services products to give developers and businesses an easy way to distribute content to end users with low latency, high data transfer speeds, and no minimum usage commitments.

#### **CloudFront Custom SSL Certificates**

CloudFront can use HTTP or HTTPS to distribute web content. Amazon does not charge any different whether that content is distributed via HTTP or HTTPS. By default, Amazon will distribute content via HTTPS using its own hostname and SSL certificate. Mine is d1x01i8qki85oj.cloudfont.net. It’s not very interesting. You are able to use an alternate hostname along with an SSL certificate you upload so you can use cdn.jayschulman.com or similar in your environment.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)

#### **Amazon VPC Security**

Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the Amazon Web Services (AWS) Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.

Amazon VPC configuration is very dependant on the network architecture. Instead of a step-by-step approach, the following are tips to consider when building out a VPC architecture:

- Secure your Amazon VPC using virtual firewall appliance. Virtual applicances can be custom built or installed via the AWS Marketplace.
- Configure IDS/IPS virtual appliance to monitor your VPC.
- Enable the CloudTrail to audit in the VPC environments. (See section on CloudTrail logging.)
- Configure a Site-to-Site VPN for securely transferring information between Amazon VPCs in different regions or between an Amazon VPC to your corporate network.
- Use an Amazon VPC to define an isolated network for each workload or organizational entity.

#### Other Tools to Consider

#### Amazon Inspector

Amazon Inspector enables you to analyze the behavior of the applications you run in AWS and helps you to identify potential security issues. Using Amazon Inspector, you can define a collection of AWS resources that comprises your application. You can then create and launch a security **assessment** of this application. During the security assessment, the network, file system, and process activity within the specified application are monitored, and a wide set of activity and configuration data is collected. This data includes details of communication with AWS services, use of secure channels, details of the running processes, network traffic among the running processes, and more. The collected data is correlated, analyzed, and compared to a set of selected security **rules**. A completed assessment produces a list of **findings** — potential security problems of various severity. More at: [https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html)

#### Amazon Web Application Firewall (WAF)

AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront and lets you control access to your content.

Unlike commercial WAFs you can buy, the Amazon WAF is a capability. It doesn’t come with any rules. So while it can be very powerful, the power is in your hands to figure out.

Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked.

[Click Here to Get A PDF eBook of the AWS Security Guide](https://jayschulman.leadpages.co/leadbox/146258a73f72a2%3A11a42adcc346dc/5745060998021120/)