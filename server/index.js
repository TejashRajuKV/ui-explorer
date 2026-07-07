const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Mock Auth Middleware
// In a real app with Clerk, we would verify JWT here
const mockAuth = async (req, res, next) => {
  let user = await prisma.user.findFirst()
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        progress: { create: { completed: 15, total: 100 } }
      }
    })
  }
  req.userId = user.id
  next()
}

// ----------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------

// Get current user profile
app.get('/api/profile', mockAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      include: {
        savedComponents: true,
        progress: true
      }
    })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' })
  }
})

// Save a component
app.post('/api/components/save', mockAuth, async (req, res) => {
  const { componentId, styleId } = req.body
  try {
    const saved = await prisma.savedComponent.create({
      data: {
        userId: req.userId,
        componentId,
        styleId
      }
    })
    res.json({ success: true, saved })
  } catch (err) {
    // Unique constraint error handled
    res.status(400).json({ error: 'Component already saved or invalid data' })
  }
})

// Unsave a component
app.delete('/api/components/save', mockAuth, async (req, res) => {
  const { componentId, styleId } = req.body
  try {
    await prisma.savedComponent.deleteMany({
      where: { userId: req.userId, componentId, styleId }
    })
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to unsave component' })
  }
})

// Update learning progress
app.post('/api/progress', mockAuth, async (req, res) => {
  const { completed } = req.body
  try {
    const progress = await prisma.learningProgress.update({
      where: { userId: req.userId },
      data: { completed }
    })
    res.json({ success: true, progress })
  } catch (err) {
    res.status(500).json({ error: 'Failed to update progress' })
  }
})

app.listen(PORT, () => {
  console.log(\`🚀 Backend server running on http://localhost:\${PORT}\`)
})
