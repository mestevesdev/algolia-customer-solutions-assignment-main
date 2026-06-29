*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

Answer:
Re: Bad design
Hi Marissa,

Thanks for taking the time to share this feedback.

I can see why that's frustrating. If you're regularly clearing and deleting indexes while iterating, having those actions take several extra clicks can really interrupt your workflow.

I've shared your feedback with our product team. If you're open to it, I'd love to hear a bit more about how you typically use those actions during development. That'll help us understand whether the best fix is a shortcut, a quicker path, or reconsidering where these actions live.

Thanks again for reaching out—we really appreciate the honest feedback.

Best,
Miguel Esteves

--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   


Answer: 

Hi Carrie,

Sorry you're dealing with this, especially with it affecting production.

This error happens when a single record exceeds Algolia’s size limit — each record has a hard limit of 100KB, and it looks like some of yours are going over it due to the extra metadata being included.

The way to fix this is to remove anything that isn’t needed for search from the indexed records, and keep that data in your own database instead.

If this started around 9:15am, did anything change at that time (like a deployment or new fields being added)? If you can share an example record, I can help pinpoint exactly what’s pushing it over the limit.

Best,
Miguel Esteves


--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  


Answer:

Hi Marc,

Thanks for reaching out!

It looks like the screenshot didn't come through — the email arrived without any attachment. Could you try sending the error message again, or paste the error text directly into your reply?

Once I can see what's happening, I'll do my best to help you get things sorted.

Best,
Miguel Esteves