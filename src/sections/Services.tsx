'use client'

import React from 'react'
import MotionOnDesktop from '@/components/MotionOnDesktop'
import { 
  Code2,
  Layers,
  Building2,
  Webhook,
  GitBranch,
  Zap, 
  Gauge,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const services = [
    {
      title: 'Full Stack Application Development',
      icon: Code2,
      category: 'Web',
      points: [
        'React + Next.js application architecture with TypeScript-first patterns',
        'Node.js backend services, REST APIs, auth flows, and integration layers',
        'Database design (schema, indexing, transactions) and API-driven systems',
      ],
    },
    {
      title: 'SaaS Product Development',
      icon: Layers,
      category: 'SaaS',
      points: [
        'Multi-tenant SaaS engineering: tenant isolation, data boundaries, and RBAC',
        'Authentication, subscriptions, billing flows, dashboards, and audit-ready UX',
        'API-driven product backends with deployment and operational considerations',
      ],
    },
    {
      title: 'Enterprise Automation Engineering',
      icon: Building2,
      category: 'Automation',
      points: [
        'Enterprise automation using Java Access Bridge (JAB) + Selenium with robust failure handling',
        'Real banking automation experience: UBL system automation across 24 modules',
        'Reliability engineering: retries, state recovery, logging, and process-level observability',
      ],
    },
    {
      title: 'Workflow Automation (n8n)',
      icon: Webhook,
      category: 'Automation',
      points: [
        'n8n workflow systems: event-driven orchestration, webhooks, and API-first automation',
        'Integrations across CRMs, databases, queues, and third-party services with secure credentials handling',
        'Production workflows: idempotency, retries, dead-letter patterns, and execution monitoring',
      ],
    },
    {
      title: 'Data Pipeline Automation (Apache Airflow)',
      icon: GitBranch,
      category: 'Data Engineering',
      points: [
        'Airflow DAG design for ETL pipelines, scheduling, and dependency-aware orchestration',
        'Pipeline reliability: SLAs, retries, backfills, and data quality guardrails',
        'Scalable task execution patterns for production data workflows',
      ],
    },
    {
      title: 'AI Automation Systems',
      icon: Zap,
      category: 'AI',
      points: [
        'LLM-based automation systems using AI APIs for structured decision workflows',
        'AI agents for tool-using automation, document processing, and controlled content generation',
        'Combine AI with workflow/pipeline orchestration for repeatable, auditable intelligent systems',
      ],
    },
    {
      title: 'Performance Optimization & Scaling',
      icon: Gauge,
      category: 'Performance',
      points: [
        'Profiling-driven optimization across frontend, backend, APIs, and database queries',
        'Caching, pagination, indexing, and rate-limit aware API design for real workloads',
        'Scalability planning: bottleneck analysis, resilience, and production monitoring approach',
      ],
    },
  ]

  const closingLine =
    'Focused on building scalable, production-ready, and enterprise-grade systems across web, automation, and AI domains.'

  return (
    <section id="services" className="section-padding pb-8 md:pb-12 lg:pb-16 relative overflow-hidden">
      <div className="container-padding relative z-10">
        <MotionOnDesktop
          as="div"
          className="text-center mb-16"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Services
          </MotionOnDesktop>
          <MotionOnDesktop
            as="div"
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            motionProps={{ variants: itemVariants }}
          />
          <MotionOnDesktop
            as="p"
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            motionProps={{ variants: itemVariants }}
          >
            Senior-level engineering across full stack web systems, SaaS product backends, enterprise automation, workflow orchestration, data pipelines, and AI-assisted automation.
          </MotionOnDesktop>
        </MotionOnDesktop>

        {/* Services */}
        <MotionOnDesktop
          as="div"
          className="max-w-6xl mx-auto"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop as="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" motionProps={{ variants: itemVariants }}>
            {services.map((service) => {
              const Icon = service.icon

              return (
                <MotionOnDesktop as="div" key={service.title} motionProps={{ variants: itemVariants }}>
                  <Card glass className="h-full">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div>
                        <div className="space-y-2">
                          {service.points.map((point) => (
                            <div key={point} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </MotionOnDesktop>
              )
            })}
          </MotionOnDesktop>

          <MotionOnDesktop as="p" className="mt-8 text-gray-300 text-base sm:text-lg leading-relaxed" motionProps={{ variants: itemVariants }}>
            {closingLine}
          </MotionOnDesktop>
        </MotionOnDesktop>

        {/* Service Process */}
        <MotionOnDesktop
          as="div"
          className="mt-16"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  How I Work
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: '1', title: 'Requirements', description: 'Clarify scope, constraints, and system interfaces' },
                    { step: '2', title: 'Architecture', description: 'Design workflow topology, integrations, and failure handling' },
                    { step: '3', title: 'Implementation', description: 'Build, test, and iterate with production-grade reliability in mind' },
                    { step: '4', title: 'Operations', description: 'Deployment, monitoring, and continuous improvements' }
                  ].map((process, index) => (
                    <MotionOnDesktop
                      as="div"
                      key={index}
                      className="text-center"
                      motionProps={{
                        variants: itemVariants,
                        whileHover: { scale: 1.05 },
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                        {process.step}
                      </div>
                      <h4 className="text-lg font-medium text-white mb-2">
                        {process.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {process.description}
                      </p>
                    </MotionOnDesktop>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionOnDesktop>
        </MotionOnDesktop>

        {/* CTA Section */}
        <MotionOnDesktop
          as="div"
          className="mt-16 text-center"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Collaboration & delivery
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Clear requirements, system-level thinking, and production-grade delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    href="#contact"
                    className="group"
                  >
                    Contact
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="#projects"
                  >
                    View My Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionOnDesktop>
        </MotionOnDesktop>
      </div>
    </section>
  )
}

export default Services
