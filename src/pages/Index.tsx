import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: "Building2",
      title: "Enterprise Architecture",
      description: "Strategic technology frameworks aligned with business objectives and scalable infrastructure design."
    },
    {
      icon: "Code2",
      title: "Software Development",
      description: "Custom applications and solutions built with modern technologies and development best practices."
    },
    {
      icon: "BarChart3",
      title: "Business Analysis",
      description: "Process optimization, requirements gathering, and data-driven strategic recommendations."
    },
    {
      icon: "Cog",
      title: "Industrial Automation & Controls",
      description: "Manufacturing process optimization, control systems integration, and operational efficiency solutions."
    },
    {
      icon: "Shield",
      title: "OT & IT Cybersecurity",
      description: "Comprehensive security frameworks protecting operational technology and information systems."
    },
    {
      icon: "Database",
      title: "Data Integration Services",
      description: "Seamless data flow, analytics platforms, and business intelligence implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-navy">4TheTekOfIt</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-navy transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-navy transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-navy transition-colors">Services</a>
              <a href="#blog" className="text-gray-600 hover:text-navy transition-colors">Blog</a>
              <a href="#contact" className="text-gray-600 hover:text-navy transition-colors">Contact</a>
            </div>
            <Button className="bg-cyan text-navy hover:bg-cyan/90">
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                Technology That Drives 
                <span className="text-cyan"> Business Imperatives</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                4TheTekOfIt helps companies achieve business imperatives through analysis and technology. 
                Veteran-owned precision meets cutting-edge innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-navy text-white hover:bg-navy/90">
                  Get in Touch
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  View Our Services
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="w-full h-96 bg-gradient-to-br from-navy/5 to-cyan/10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-cyan/30"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-cyan/20 rounded-full"></div>
                <div className="absolute top-20 right-12 w-12 h-12 bg-navy/20 rounded-full"></div>
                <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-br from-cyan/30 to-navy/20 rounded-2xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-cyan/40 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a veteran-owned technology company, we bring military precision and strategic thinking 
                to every project. Our mission is to align cutting-edge technology solutions with your 
                business workflows, ensuring operational excellence and sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that technology is not just about tools—it's about empowering your 
                organization to achieve its most critical business objectives with confidence and efficiency.
              </p>
              <Button className="bg-cyan text-navy hover:bg-cyan/90">
                Learn More About Our Mission
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-navy/10 to-cyan/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Users" size={64} className="text-navy/40 mx-auto mb-4" />
                    <div className="text-navy/60 font-semibold">Veteran-Owned Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section id="services" className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions engineered for mission-critical business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy group-hover:text-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-navy text-white hover:bg-navy/90">
              View All Services
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600">
              Strategic perspectives on technology, business transformation, and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Digital Transformation Strategies",
                date: "December 15, 2024",
                excerpt: "How veteran-owned businesses are leading the charge in digital transformation initiatives..."
              },
              {
                title: "Cybersecurity in OT/IT Integration",
                date: "December 10, 2024",
                excerpt: "Best practices for securing operational technology and information systems convergence..."
              },
              {
                title: "Data-Driven Decision Making Framework",
                date: "December 5, 2024",
                excerpt: "Implementing robust data integration solutions for enhanced business intelligence..."
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div 
                    className="w-full h-32 rounded-lg mb-4 relative overflow-hidden"
                    style={{
                      backgroundImage: `url('/img/734bdd03-36b4-4a5b-bfff-b718fbca42dd.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-cyan/40"></div>
                  </div>
                  <CardTitle className="text-lg text-navy group-hover:text-cyan transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 text-cyan hover:text-navy mt-3">
                    Read More
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Let's discuss how our veteran-owned technology expertise can drive your business imperatives forward.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-cyan-100">
                  <Icon name="Mail" size={20} className="mr-3" />
                  <span>contact@4thetekofIT.com</span>
                </div>
                <div className="flex items-center text-cyan-100">
                  <Icon name="Phone" size={20} className="mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-cyan-100">
                  <Icon name="MapPin" size={20} className="mr-3" />
                  <span>United States</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-cyan text-navy hover:bg-cyan/90">
                  Send Message
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">4TheTekOfIt</div>
              <p className="text-sm">
                Veteran-owned technology solutions driving business imperatives through precision and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan transition-colors">Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Business Analysis</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-cyan transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="hover:text-cyan transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="hover:text-cyan transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 4TheTekOfIt. All rights reserved. Veteran-owned and operated.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}