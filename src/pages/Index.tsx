import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Building2',
      title: 'Enterprise Architecture',
      description: 'Strategic technology planning and enterprise-wide system design for scalable business solutions.'
    },
    {
      icon: 'Code',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.'
    },
    {
      icon: 'BarChart3',
      title: 'Business Analysis',
      description: 'In-depth analysis to align technology initiatives with business objectives and workflows.'
    },
    {
      icon: 'Cpu',
      title: 'Industrial Automation & Controls',
      description: 'Advanced automation systems to optimize operational efficiency and control processes.'
    },
    {
      icon: 'Shield',
      title: 'OT & IT Cybersecurity',
      description: 'Comprehensive security solutions protecting both operational and information technology systems.'
    },
    {
      icon: 'Database',
      title: 'Data Integration Services',
      description: 'Seamless data integration and management solutions for enhanced decision-making capabilities.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-navy">4TheTekOfIt</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-navy transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-navy transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-navy transition-colors">Services</a>
            <a href="#blog" className="text-gray-600 hover:text-navy transition-colors">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-navy transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-8 bg-gradient-to-br from-white via-cyan/5 to-navy/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-navy mb-6 animate-fade-in">
            4TheTekOfIt helps companies achieve<br />
            <span className="text-cyan">business imperatives</span><br />
            through analysis and technology.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Veteran-owned technology solutions that bridge the gap between strategic business goals 
            and tactical implementation with military precision.
          </p>
          <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg">
            Get in Touch
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">WHO WE ARE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a veteran-owned business, we bring the same dedication, precision, and strategic 
                thinking that defines military excellence to the technology sector. We understand 
                that successful technology implementation requires more than just technical expertise—it 
                demands the ability to align complex systems with business workflows and objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission is to serve as the bridge between your business imperatives and the 
                technology solutions that make them possible. We approach every project with the 
                discipline and attention to detail that comes from our military background.
              </p>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Learn More About Our Team
              </Button>
            </div>
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-navy to-cyan/80 rounded-lg p-8 text-white relative overflow-hidden"
                style={{
                  backgroundImage: `url('/img/c1d44436-63ef-4e64-9972-17018d3ac97c.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-cyan/70"></div>
                <div className="relative z-10">
                  <Icon name="Award" size={48} className="mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Veteran Excellence</h3>
                  <p className="text-cyan-100">
                    Military precision meets technology innovation. Our veteran leadership brings 
                    proven expertise in strategic planning, risk management, and mission-critical execution.
                  </p>
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
            <h2 className="text-4xl font-bold text-navy mb-6">WHAT WE DO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology services are designed to transform your business 
              operations and drive strategic growth through innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">INSIGHTS & EXPERTISE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest insights on technology trends, industry best practices, and strategic analysis.
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
                  <span>Washington, D.C. Metro Area</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-cyan-100"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-cyan-100"
                required
              />
              <Textarea
                name="message"
                placeholder="Tell us about your project or goals"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-cyan-100 min-h-[120px]"
                required
              />
              <Button type="submit" size="lg" className="w-full bg-cyan hover:bg-cyan/90 text-navy font-semibold">
                Send Message
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-navy mb-4">4TheTekOfIt</div>
          <p className="text-gray-600 mb-4">
            Veteran-owned technology solutions driving business imperatives through precision and expertise.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 4TheTekOfIt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;