from django.db import models

# ResumeJibon: The Resume Life
class ResumeJibon(models.Model):
    nam_dham = models.CharField(max_length=255) # Name
    contact_shongjog = models.TextField() # Contact Info
    skills_khomota = models.TextField() # Skills (comma separated or whatever)
    experience_oviggota = models.JSONField(default=list) # Experience List
    education_porashona = models.JSONField(default=list) # Education List
    created_at_sokale = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # informal string rep
        return f"{self.nam_dham} er Jibon"

# ChakriBakri: The Jobs
class ChakriBakri(models.Model):
    company_nam = models.CharField(max_length=255)
    job_description_bistari = models.TextField() # JD
    resume_link_kora = models.ForeignKey(ResumeJibon, on_delete=models.CASCADE, related_name='chakris')
    match_score_koto = models.FloatField(default=0.0)
    missing_keywords_nai = models.JSONField(default=list)

    def __str__(self):
        return f"{self.company_nam} e Chakri Hobe?"

# PortfolioDujon: The Portfolio
class PortfolioDujon(models.Model):
    resume_ta = models.OneToOneField(ResumeJibon, on_delete=models.CASCADE)
    theme_rong = models.CharField(max_length=50, default='neon_sobuj') # Neon Green
    slug_naam = models.SlugField(unique=True)
    
    def __str__(self):
        return f"Portfolio of {self.resume_ta.nam_dham}"
