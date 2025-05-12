# Vulnerable Web Application Security Assessment

## 🎯 Objective
This web application contains intentional security vulnerabilities for assessment purposes. Your challenge is to:
- Identify security vulnerabilities
- Propose remediation strategies
- Demonstrate application security knowledge

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Basic understanding of web security concepts
- Security testing tools (optional)

### Installation

1. Clone the repository
git clone [repository-url] or download and unzip
cd vulnerable-app

2. Build and run Docker container
```bash
docker-compose up --build
```
2a. The Dockerfile was built using MAC so you may need to modify to adjust for your operating system. Troubleshooting and getting the app running is also part of the assessment. 
If you are unable to get it running in a few minutes please email me nvalenzuela@paciolan.com for assistance.

3. Access the application
Navigate to [http://localhost:3000](http://localhost:3000)  
To test the endpoints use CURL, Postman, Bruno or whatever apps you are comfortable with to test APIs

## 🔍 Assessment Guide

### Testing Methodology

1. **Manual Testing**
   - Explore application functionality
   - Test input validation
   - Analyze response headers
   - Check for common vulnerabilities

2. **Automated Testing**
   - Use OWASP ZAP or similiar tools for dynamic analysis
   - Run security scanners
   - Analyze results

## 📝 Documentation Requirements

### Vulnerability Report Format

For each vulnerability found, document:

- **Vulnerability Name**
- **Description**
- **Reproduction Steps**
- **Impact Assessment**
- **Remediation Suggestion**

## 🛡️ Common Vulnerabilities to Consider

- [ ] SQL Injection
- [ ] Command Injection
- [ ] Cross-Site Scripting (XSS)
- [ ] Missing Security Headers
- [ ] Weak Authentication
- [ ] Insecure Direct Object References
- [ ] Cross-Site Request Forgery (CSRF)
- [ ] Security Misconfiguration

## 📊 Assessment Criteria

### Evaluation Matrix

| Criteria |
|----------|
| Vulnerability Discovery |
| Remediation Quality |
| Technical Understanding |

### Key Success Factors

1. **Thoroughness** in vulnerability identification
2. **Clarity** in documentation and explanation
3. **Practicality** of proposed solutions
4. **Understanding** of security implications

## ⚠️ Important Notes

- This is a controlled environment for security testing
- Focus on both finding and fixing vulnerabilities
- Document your methodology and findings clearly
- Be prepared to explain your approach and reasoning

---
*Good luck with your security assessment! Remember to demonstrate both technical skills and security awareness.*