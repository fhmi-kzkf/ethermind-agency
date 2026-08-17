# Product Requirements Document (PRD): Multi-Agent Crisis Simulation Platform

## 1. Executive Summary
The Multi-Agent Crisis Simulation Platform is a large-scale, advanced computational environment designed to model, simulate, and analyze crisis response dynamics (e.g., natural disasters, pandemics, refugee crises). By leveraging Multi-Agent Reinforcement Learning (MARL) with mathematically modeled "personalities," the platform simulates how diverse actors (citizens, responders, logistics) react to cascading, dynamic crisis events. Coupled with a 3-tier AI-driven debriefing engine and a policy sandbox, the platform bridges the gap between theoretical disaster management and practical, data-driven policy optimization for both academic research and government/NGO operations.

## 2. Problem Statement & Goals

### Problem Statement
Current crisis response planning relies heavily on static models, historical heuristics, and human intuition. These methods fail to capture the complex, emergent behaviors of heterogeneous populations, the cascading failures of interdependent infrastructure, and the psychological variables (panic, empathy, greed) that dictate real-world crisis outcomes. Furthermore, post-crisis analysis is often subjective, lacking causal, data-driven insights into *why* specific operational decisions failed.

### Goals
1. **Behavioral Fidelity**: Create a mathematically rigorous simulation where agent behaviors emerge from defined personality vectors and reinforcement learning, rather than hardcoded scripts.
2. **Dynamic Stress-Testing**: Enable users to inject "Black Swan" events and observe cascading systemic failures in real-time.
3. **Actionable AI Insights**: Provide automated, causally sound post-crisis debriefings using LLMs to identify tipping points and SOP failures.
4. **Policy Optimization**: Offer a sandbox environment for policymakers to test "what-if" scenarios and predict the outcomes of different intervention strategies before real-world implementation.

## 3. Target Audience

### Academic & Research (B2C/B2A)
* **Personas**: Computer Science, Disaster Management, and Sociology academics; Master's/Ph.D. students.
* **Use Cases**: Thesis research on emergent crowd behavior, testing novel MARL algorithms, sociological studies on panic propagation, and publishing papers on crisis topology.

### B2G / B2B (Enterprise & Government)
* **Personas**: BNPB (National Disaster Management Agency) planners, Red Cross operations directors, humanitarian NGO logistics coordinators, public policy consultants.
* **Use Cases**: Pre-disaster preparedness planning, optimizing resource allocation, testing evacuation protocols, evaluating the impact of public policy interventions (e.g., lockdowns, zoning), and post-incident forensic analysis.

## 4. Core Features & User Stories

### 4.1. Role-Based Multi-Agent Engine (MARL)
Agents are modeled using a Multi-Objective Utility Function layered over a Q-Learning framework. Each agent possesses a normalized Personality Vector: `P = [p_risk, p_empathy, p_greed, p_panic]`. 
* **Mathematical Model**: The reward `r` for an action is computed as a dot product of environmental feedback and the personality vector: 
  `r = (w_survival * p_risk) + (w_group_benefit * p_empathy) - (w_cost * p_greed)`.
* **Evolution**: Agents can "reproduce" upon sustained high survival, passing a blended and mutated vector to child agents: `P_child = α(P_parent1) + β(P_parent2) + N(0,μ)`.

**User Stories:**
* *As a Sociology Researcher*, I want to configure the initial personality vectors of a population so that I can study the emergent differences between a highly empathetic community versus a highly self-interested one during a flood.
* *As a Computer Science Student*, I want to observe the Q-learning convergence of the "Pragmatic Logistics" agents so that I can evaluate the efficiency of the reward function.

### 4.2. Dynamic Environment & Crisis Injector
The environment is modeled as a weighted directional graph (using NetworkX). Nodes represent locations (safe zones, hospitals), and edges represent pathways. Edge weights dynamically alter based on crisis events.
* **MVP**: Procedurally generated synthetic graphs configured via JSON (e.g., `num_nodes=50`, `population_density=high`).
* **V2**: Ingestion of real-world GIS data (GeoJSON via `shapely` and `osmnx`) to simulate actual city layouts.
* **Crisis Injector**: Allows injection of Black Swan events (e.g., bridge collapse, hoax information spread, ventilator depletion) that sever edges or alter node capacities.

**User Stories:**
* *As a BNPB Policy Maker*, I want to import a GeoJSON map of Jakarta's flood-prone areas so that I can simulate a realistic 100-year flood scenario.
* *As an NGO Coordinator*, I want to inject a "Bridge Collapse" event at tick 500 to observe how logistics agents dynamically reroute supplies when primary paths are severed.

### 4.3. Resource & Bottleneck Mapper
A real-time visualization dashboard utilizing Mapbox/Leaflet and Recharts to display the spatial and temporal state of the simulation.
* Visualizes refugee density heatmaps, logistics traffic congestion, and medical supply depletion rates.

**User Stories:**
* *As a Red Cross Operations Director*, I want to view a real-time heatmap of refugee density and supply bottlenecks so that I can identify which safe zones require immediate logistical reinforcement.

### 4.4. Policy Sandbox
A feature allowing users to fork the current simulation state, apply hypothetical policy changes, and run parallel simulations to compare outcomes.

**User Stories:**
* *As a Public Policy Consultant*, I want to test the scenario "What if we lockdown Area A 24 hours earlier?" and compare the infection/survival metrics against the baseline simulation to justify policy recommendations.

### 4.5. Causal XAI Debriefing
An AI-driven post-mortem engine that analyzes simulation logs to generate "Post-Crisis Reports." To manage LLM context limits and costs, it uses a 3-Tier Log Aggregation Pipeline:
1. **Tier 1 (Telemetry DB)**: High-frequency tick data (positions, health) logged to a local time-series DB (SQLite/DuckDB). Never sent to the LLM.
2. **Tier 2 (Deterministic Event Extraction)**: A lightweight Python script detects state-change thresholds (e.g., "Agent health < 20%", "Node capacity reached"), reducing 10,000 ticks to ~50 macro-events.
3. **Tier 3 (Semantic Compression)**: Macro-events are embedded locally (e.g., `all-MiniLM-L6-v2`). Top-k relevant events are clustered and formatted.
* **LLM Integration**: DeepSeek API receives a compressed payload (<1,500 tokens) containing the day's macro-state, key clustered events, and the specific analytical task to generate causal explanations and SOP recommendations.

**User Stories:**
* *As an Academic Researcher*, I want the system to automatically generate a causal report explaining *why* the medical supply chain collapsed on Day 3, including the exact tipping point, so I can cite it in my thesis.
* *As a Government Official*, I want the AI to recommend specific SOP improvements based on the simulation's failure points to present to the disaster management committee.

## 5. Non-Functional Requirements

### 5.1. Technology Stack Constraints
* **Frontend**: Next.js 15, Tailwind CSS, Mapbox/Leaflet (geospatial visualization), Recharts (data visualization).
* **Backend**: FastAPI (Python), NumPy (matrix operations for simulation math), NetworkX (graph topology).
* **Database**: SQLite/DuckDB for MVP high-frequency telemetry; PostgreSQL/PostGIS for V2 GIS data.
* **AI/ML**: DeepSeek API (for cost-efficient XAI text generation), local embedding models (for Tier 3 log compression), custom Q-Learning/MARL logic.

### 5.2. Performance & Scalability
* **Simulation Tick Rate**: The backend must sustain a minimum of 60 ticks per second for a graph of 5,000 nodes and 10,000 agents without dropping frames in the frontend visualization.
* **LLM Latency**: The 3-tier log compression pipeline must process and deliver the final prompt to the DeepSeek API within 5 seconds of simulation completion.
* **Graph Scaling (Large Scale)**: While MVP uses synthetic grids, the architecture must be modular enough to transition to distributed graph processing (e.g., GraphTool or Spark) in future iterations when ingesting massive real-world city GIS data.

### 5.3. Reliability & Data Integrity
* **State Checkpointing**: The simulation engine must support state serialization (save/load) at any tick, allowing users to pause, rewind, and fork simulations for the Policy Sandbox without data corruption.
* **Telemetry Storage**: The Tier 1 Telemetry DB must handle high-write throughput (millions of rows per simulation run) efficiently, utilizing append-only logging and periodic compaction.

### 5.4. Security & Compliance
* **API Security**: DeepSeek API keys and other third-party service credentials must be stored in secure environment variables, never exposed to the client-side Next.js application.
* **Data Privacy**: When transitioning to V2 (real-world GIS), the system must ensure no Personally Identifiable Information (PII) is ingested. Only structural, demographic, and infrastructural data should be mapped.
* **Access Control**: Role-Based Access Control (RBAC) must be implemented to separate Academic users (read/write research sandboxes) from B2G users (access to classified/sensitive government policy sandboxes).