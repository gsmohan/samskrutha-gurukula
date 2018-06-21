Step 1 - Articles base url : http://enewspapr.com/OutSourcingDataChanged.php?operation=getPageArticleDetails&selectedIssueId=VVAANINEW_<SpecialSupplements>_<Date>

    <SpecialSupplements> : 
        [
            {"title":"Vithavani", "tag":"VIT", "day": "Monday"},
            {"title":"Lalita", "tag":"LAL", "day": "Tuesday"},
            {"title":"Mast", "tag":"MAS", "day":"Wednesday"},
            {"title":"Samskriti", "tag":"SAM", "day":"Thursday"},
            {"title":"Cine Vaani", "tag":"CIN", "day":"Friday"},
            {"title":"Putani", "tag":"PUT", "day":"saturday"},
            {"title":"Vijaya Vihara", "tag":"VIJ", "day":"Sunday"}
        ]
    <Date> : Pass month as a params then take all the days 
        like how many monday's in a month and take the dates respectivly then hit api 
        ... same thing will repeat with all days    


        

Step 2 -         
    * From the above API will get the list of pages 
    * each page has Articles list     
    * Iterate the 2nd page (basically this page contains the article image we are finding)
    * Find the particualar Article that has a property w: [125-130]px
    * Get the "imagename" property from that object

    Article base url : https://s3.ap-south-1.amazonaws.com/erelegos3dec17/<imagename>

    eg : <imagename> = News/VVAANINEW/SAM/2018/06/14/ArticleImages/11F5253.jpg